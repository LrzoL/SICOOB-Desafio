'use client';

import { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
    website: '',
    bio: '',
    address: '',
    city: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Cria o usuário com email/senha no Supabase Auth
    const { user, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password || 'defaultpassword123', // defina ou adicione um campo password
    });

    if (signUpError) {
      console.error('Erro ao registrar:', signUpError.message);
      return;
    }

    // 2. Insere os dados adicionais no banco de dados (ex: tabela "profiles")
    const { error: insertError } = await supabase.from('profiles').insert([
      {
        id: user.id, // mesmo ID do auth
        username: form.username,
        website: form.website,
        bio: form.bio,
        firstname: form.firstname,
        lastname: form.lastname,
        address: form.address,
        city: form.city,
      },
    ]);

    if (insertError) {
      console.error('Erro ao salvar perfil:', insertError.message);
    } else {
      alert('Usuário registrado com sucesso!');
    }
  };

  return (
    <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
      <form onSubmit={handleSubmit} className="container flex flex-col items-center justify-center space-y-12">
        {/* Seus fieldsets... substitua todos os <input> por campos controlados */}
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 dark:bg-gray-50">
          <div className="flex flex-col gap-4">
            <div className='flex flex-col gap-1'>
              <label htmlFor='firstname' className='text-black'>First Name</label>
            <input id="firstname" value={form.firstname} onChange={handleChange} placeholder="First name" className='border-1 rounded-md px-2 w-50'/>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='lastname' className='text-black'>Last Name</label>
            <input id="lastname" value={form.lastname} onChange={handleChange} placeholder="Last name" className='border-1 rounded-md px-2 w-50' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='email' className='text-black'>Email</label>
            <input id="email" value={form.address} onChange={handleChange} placeholder="Email" className='border-1 rounded-md px-2 w-50' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='username' className='text-black'>Username</label>
            <input id="username" value={form.username} onChange={handleChange} placeholder="Username" className='border-1 rounded-md px-2 w-50' />
            </div>
            <input id="username" value={form.username} onChange={handleChange} placeholder="Username" />
            <input id="website" value={form.website} onChange={handleChange} placeholder="https://" />
            <textarea id="bio" value={form.bio} onChange={handleChange} placeholder="Bio" />
            {/* Campo de senha opcional */}
            <input id="password" value={form.password || ''} onChange={handleChange} placeholder="Senha" type="password" />
          </div>
        </fieldset>

        <button type="submit" className="bg-green-400 text-white w-30 rounded-full text-center cursor-pointer py-3 hover:scale-110 transition-all">Registrar</button>
      </form>
    </section>
  );
}
