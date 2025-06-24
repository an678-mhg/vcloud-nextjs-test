import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/auth.config'
import { PrismaClient } from '@prisma/client'
import type { Status } from '@prisma/client'

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

    const instances = await prisma.instance.findMany({
      where: {
        userId: session.user.id,
      },
    })

    return NextResponse.json(instances)
  } catch (error) {
    console.error('Error fetching instances:', error)
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
    const { name, type } = body

    if (!name || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const instance = await prisma.instance.create({
      data: {
        name,
        type,
        status: Status.CREATING,
        userId: session.user.id,
      },
    })

    return NextResponse.json(instance)
  } catch (error) {
    console.error('Error creating instance:', error)
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
    const { id, action } = body

    if (!id || !action) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const instance = await prisma.instance.findUnique({
      where: { id },
    })

    if (!instance || instance.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Instance not found' },
        { status: 404 }
      )
    }

    let newStatus: Status
    switch (action) {
      case 'start':
        newStatus = Status.ACTIVE
        break
      case 'stop':
        newStatus = Status.STOPPED
        break
      case 'restart':
        newStatus = Status.CREATING
        break
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }

    const updatedInstance = await prisma.instance.update({
      where: { id },
      data: { status: newStatus },
    })

    return NextResponse.json(updatedInstance)
  } catch (error) {
    console.error('Error updating instance:', error)
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
        { error: 'Missing instance ID' },
        { status: 400 }
      )
    }

    const instance = await prisma.instance.findUnique({
      where: { id },
    })

    if (!instance || instance.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Instance not found' },
        { status: 404 }
      )
    }

    await prisma.instance.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting instance:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 