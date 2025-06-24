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
    const clusters = await prisma.kubernetesCluster.findMany({
      where: {
        userId: session.user.id,
      },
    })

    return NextResponse.json(clusters)
  } catch (error) {
    console.error('Error fetching clusters:', error)
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
    const { name, version, nodeCount } = body

    const cluster = await prisma.kubernetesCluster.create({
      data: {
        name,
        version,
        nodeCount,
        status: 'CREATING',
        userId: session.user.id,
      },
    })

    return NextResponse.json(cluster)
  } catch (error) {
    console.error('Error creating cluster:', error)
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

    const cluster = await prisma.kubernetesCluster.update({
      where: {
        id,
        userId: session.user.id,
      },
      data: {
        status,
      },
    })

    return NextResponse.json(cluster)
  } catch (error) {
    console.error('Error updating cluster:', error)
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
      return new NextResponse('Missing cluster ID', { status: 400 })
    }

    const cluster = await prisma.kubernetesCluster.update({
      where: {
        id,
        userId: session.user.id,
      },
      data: {
        status: 'DELETED',
      },
    })

    return NextResponse.json(cluster)
  } catch (error) {
    console.error('Error deleting cluster:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 