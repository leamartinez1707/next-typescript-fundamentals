import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from "bcryptjs"

export async function GET(request: Request) {

  await prisma.todo.deleteMany(); // delete * from todo

  const user = await prisma.user.create({
    data: {
      email: "leandromartinez.dev@gmail.com",
      password: bcrypt.hashSync("leandro123", 10),
      roles: ["admin", "user"],
      todos: {
        create: [
          { description: 'Description 1' },
          { description: 'Description 2', complete: true },
          { description: 'Description 3' },
        ],
      }
    }
  })
  return NextResponse.json({ message: 'Seed Executed', user });
}