export const dynamic = 'force-dynamic';
export const revalidate = 0;


import TitleSpan from "@/components/TitleSpan";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: 'Listado de Todos',
  description: 'SEO Title',
};


export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });


  return (
    <div>
      <TitleSpan title="Rest Todos" />
      <div className="w-full mx-auto my-6">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}