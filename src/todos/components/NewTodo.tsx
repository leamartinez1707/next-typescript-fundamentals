'use client';

import { FormEvent, useState } from 'react';
// import { useRouter } from 'next/navigation';

import { IoTrashOutline } from 'react-icons/io5';
import { addTodo, deleteCompleted } from '../actions/todo-actions';

// import * as todosApi from '@/todos/helpers/todos';


export const NewTodo = () => {

  // const router = useRouter();
  const [description, setDescription] = useState('');



  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;

    await addTodo(description);
    setDescription('');
    // router.refresh();
  }

  // const deleteCompleted = async() => {
  // await todosApi.deleteCompletedTodos();
  // router.refresh();
  // }



  return (
    <form onSubmit={onSubmit} className='flex w-full bg-white p-3 rounded-lg border-2 border-gray-200 shadow-md items-center'>
      <input type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={() => deleteCompleted()}
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        <span className='ml-2'>Borrar completados</span>
      </button>


    </form>
  )
}