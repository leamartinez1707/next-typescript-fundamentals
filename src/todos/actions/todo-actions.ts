'use server';

import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { auth } from '@/app/api/auth';


export const sleep = async (seconds: number = 0) => {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });

}



export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {

  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  await sleep(3);

  const todo = await prisma.todo.findFirst({
    where: {
      id,
      userId: session.user.id
    }
  });

  console.log(todo)

  if (!todo) {
    throw `Todo con id ${id} no encontrado`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete }
  });

  revalidatePath('/dashboard/server-todos');
  return updatedTodo;

}


export const addTodo = async (description: string) => {

  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  try {

    const todo = await prisma.todo.create({
      data: {
        description,
        userId: session.user.id
      }
    });
    revalidatePath('/dashboard/server-todos');

    return todo;

  } catch (error) {
    return {
      message: 'Error creando todo'
    }
  }

}


export const deleteCompleted = async (): Promise<void> => {

  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  await prisma.todo.deleteMany({
    where: {
      complete: true,
      userId: session.user.id
    }
  });
  revalidatePath('/dashboard/server-todos');

}