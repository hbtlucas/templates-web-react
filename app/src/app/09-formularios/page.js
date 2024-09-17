"use client";

import { useState } from "react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export default function Home() {
  return (
    <div className="flex flex-col items-start flex-wrap w-full  space-y-8">
      <Exemplo1 />
    </div>
  )
}

const _contacts = [
  { id:'123', nome: 'João', sobrenome: ' da Silva', email: 'joao.silva@gmail.com', telefone: '66 98787-4545' },
]

function Exemplo1() {
  const [contacts, setContacts] = useState(_contacts);
  const [status, setStatus] = useState('idle');
  const [editingContact, setEditingContact] = useState({});
  const onEditContact = (contact) => {
    setStatus('editing');
    setEditingContact(contact);
  }
  const onSaveContact = (contact) => {
    if (status === 'adding') {
      contact.id = Math.random().toString(36).substring(2);
      setContacts([...contacts, contact]);
    }
    else if (status === 'editing') {
      const newContacts = contacts.map((c) => {
        if (c.id === contact.id) {
          return contact;
        }
        return c;
      });
      setContacts(newContacts);
    }
    setStatus('idle');
    setEditingContact({});
  }

  const onRemoveContact = (contact) => {
    const newContacts = contacts.filter((c) => c.id !== contact.id);
    setContacts(newContacts);
  }

  return (
    <div className="w-full">
      <h1 className="text-base mb-8">Exemplo 1: Formulario e Tabela</h1>
      
      {(status === 'editing' || status === 'adding' ) && (
      <div className="my-8">
        <ContatoForm 
          contact={editingContact} 
          onSave={onSaveContact}
          onCancel={()=> { 
            setStatus('idle');
            setEditingContact({});
          }}
        />
      </div>
      )}

      {(status === 'idle') && (
      <TabelaContatos 
        contacts={contacts} 
        onEditContact={onEditContact}  
        onAdd={()=>setStatus('adding')}
        onRemoveContact={onRemoveContact}
      />)}
    </div>
  )
}

export function ContatoForm({contact, onSave, onCancel}) {

  const ContatoSchema = yup.object().shape({
    nome: yup.string()
      .required("Nome é obrigatório"),
    sobrenome: yup.string()
      .required("Sobrenome é obrigatório"),
    email: yup.string()
      .email("Digite um email válido.")
      .required("Email é obrigatório"),
    telefone: yup.string()
      .required("Telefone é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ 
    resolver: yupResolver(ContatoSchema),
    defaultValues: contact,
  });

  const onSubmit = (data) => {
    (typeof(onSave)=='function') && onSave?.(data);
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
    >
      <div className="px-4 py-6 sm:p-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 lg:grid-cols-12">

          <div className="sm:col-span-3">
            <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2">
              <input
                id="nome"
                {...register("nome")}
                type="text"
                autoComplete="nome"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors?.nome && <p className="mt-2 text-sm text-red-600">{errors.nome.message}</p>}
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="sobrenome" className="block text-sm font-medium leading-6 text-gray-900">
              Sobrenome
            </label>
            <div className="mt-2">
              <input
                id="sobrenome"
                {...register("sobrenome")}
                type="text"
                autoComplete="sobrenome"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors?.sobrenome && <p className="mt-2 text-sm text-red-600">{errors.sobrenome.message}</p>}

          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email 
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="text"
                autoComplete="email"
                {...register("email")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors?.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
              Telefone 
            </label>
            <div className="mt-2">
              <input
                id="telefone"
                type="tel"
                autoComplete="telefone"
                {...register("telefone")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors?.telefone && <p className="mt-2 text-sm text-red-600">{errors.telefone.message}</p>}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 bg-gray-50">
        <button 
          type="button" 
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => (typeof(onCancel)=='function') && onCancel?.()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}



function TabelaContatos({contacts, onEditContact, onAdd, onRemoveContact}) {
  return (
    <div className="">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Contatos</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => (typeof(onAdd) == 'function') && onAdd()}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Adicionar Contato
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Sobrenome
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Telefone
                  </th>
                  <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {contacts.map((contact) => (
                  <tr key={contact.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {contact.nome}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{contact.sobrenome}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{contact.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{contact.telefone}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 space-x-4">
                      <button 
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => (typeof(onEditContact) == 'function') && onEditContact(contact)}
                      >
                        Editar
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => (typeof(onRemoveContact) == 'function') && onRemoveContact(contact)}
                      >
                        Apagar
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
