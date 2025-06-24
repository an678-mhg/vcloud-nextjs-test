import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/auth.config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const tickets = await prisma.ticket.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        user: true,
        messages: true,
      }
    })

    return NextResponse.json({
      tickets,
    })
  } catch (error) {
    console.error('Error fetching support information:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { title, description, priority } = body

    if (!title || !description || !priority) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // First create the ticket
    const ticket = await prisma.ticket.create({
      data: {
        title,
        description,
        priority,
        status: 'OPEN',
        userId: session.user.id,
      }
    })

    // Then create the initial message
    const newMessage = await prisma.message.create({
      data: {
        content: description,
        userId: session.user.id,
        ticketId: ticket.id,
      }
    })

    // Finally fetch the ticket with all relations
    const fullTicket = await prisma.ticket.findUnique({
      where: { id: ticket.id },
      include: {
        user: true,
        messages: true,
      }
    })

    return NextResponse.json(fullTicket)
  } catch (error) {
    console.error('Error creating support ticket:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { id, message } = body

    if (!id || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const ticket = await prisma.ticket.findUnique({
      where: { id },
    })

    if (!ticket || ticket.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Ticket not found' },
        { status: 404 }
      )
    }

    // Create new message
    const newMessage = await prisma.message.create({
      data: {
        content: message,
        userId: session.user.id,
        ticketId: id,
      }
    })

    // Fetch updated ticket with all relations
    const updatedTicket = await prisma.ticket.findUnique({
      where: { id },
      include: {
        user: true,
        messages: true,
      }
    })

    return NextResponse.json(updatedTicket)
  } catch (error) {
    console.error('Error updating support ticket:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Missing ticket ID' },
        { status: 400 }
      )
    }

    const ticket = await prisma.ticket.findUnique({
      where: { id },
    })

    if (!ticket || ticket.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Ticket not found' },
        { status: 404 }
      )
    }

    await prisma.ticket.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting support ticket:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 