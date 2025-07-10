export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { auth } from "@/app/api/auth";
import TitleSpan from "@/components/TitleSpan";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Listado de Todos',
  description: 'SEO Title',
};


export default async function ServerTodosPage() {

  const session = await auth();

  if (!session?.user) {
    return redirect('/api/auth');
  }

  const todos = await prisma.todo.findMany({
    where: {
      userId: session?.user?.id
    },
    orderBy: { description: 'asc' }
  });


  return (
    <>
      <TitleSpan title="Server Todos" />

      <div className="w-full mx-auto my-6">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}