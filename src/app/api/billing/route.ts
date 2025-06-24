import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/auth.config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const [invoices, paymentMethods, currentUsage] = await Promise.all([
      prisma.invoice.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.paymentMethod.findMany({
        where: {
          userId: session.user.id,
        },
      }),
      prisma.credit.findFirst({
        where: {
          userId: session.user.id,
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear(),
        },
      }),
    ])

    return NextResponse.json({
      invoices,
      paymentMethods,
      currentUsage,
    })
  } catch (error) {
    console.error('Error fetching billing information:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { type, cardNumber, expiryMonth, expiryYear, cvc } = body

    if (!type || !cardNumber || !expiryMonth || !expiryYear || !cvc) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically integrate with a payment processor
    // like Stripe to validate and store the card information securely

    const paymentMethod = await prisma.paymentMethod.create({
      data: {
        type,
        last4: cardNumber.slice(-4),
        expiryMonth,
        expiryYear,
        userId: session.user.id,
      },
    })

    return NextResponse.json(paymentMethod)
  } catch (error) {
    console.error('Error adding payment method:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { id, action } = body

    if (!id || !action) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const paymentMethod = await prisma.paymentMethod.findUnique({
      where: { id },
    })

    if (!paymentMethod || paymentMethod.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Payment method not found' },
        { status: 404 }
      )
    }

    switch (action) {
      case 'setDefault':
        // First, unset any existing default payment method
        await prisma.paymentMethod.updateMany({
          where: {
            userId: session.user.id,
            isDefault: true,
          },
          data: {
            isDefault: false,
          },
        })

        // Then set the new default
        const updatedPaymentMethod = await prisma.paymentMethod.update({
          where: { id },
          data: {
            isDefault: true,
          },
        })

        return NextResponse.json(updatedPaymentMethod)

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error updating payment method:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Missing payment method ID' },
        { status: 400 }
      )
    }

    const paymentMethod = await prisma.paymentMethod.findUnique({
      where: { id },
    })

    if (!paymentMethod || paymentMethod.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Payment method not found' },
        { status: 404 }
      )
    }

    if (paymentMethod.isDefault) {
      return NextResponse.json(
        { error: 'Cannot delete default payment method' },
        { status: 400 }
      )
    }

    await prisma.paymentMethod.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting payment method:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 