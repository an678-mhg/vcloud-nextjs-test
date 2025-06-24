import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/auth.config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const storages = await prisma.storage.findMany({
      where: {
        userId: session.user.id,
      },
    })

    return NextResponse.json(storages)
  } catch (error) {
    console.error('Error fetching storage volumes:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, type, size } = body

    const storage = await prisma.storage.create({
      data: {
        name,
        type,
        size,
        status: 'ACTIVE',
        userId: session.user.id,
      },
    })

    return NextResponse.json(storage)
  } catch (error) {
    console.error('Error creating storage volume:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const body = await request.json()
    const { id, status } = body

    const storage = await prisma.storage.update({
      where: {
        id,
        userId: session.user.id,
      },
      data: {
        status,
      },
    })

    return NextResponse.json(storage)
  } catch (error) {
    console.error('Error updating storage volume:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return new NextResponse('Missing storage ID', { status: 400 })
    }

    const storage = await prisma.storage.update({
      where: {
        id,
        userId: session.user.id,
      },
      data: {
        status: 'DELETED',
      },
    })

    return NextResponse.json(storage)
  } catch (error) {
    console.error('Error deleting storage volume:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 