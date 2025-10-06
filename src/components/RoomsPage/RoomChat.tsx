import { useAppContext } from "../../AppContext";
import { useState } from 'react';

interface AppContextType {
    chatUrl: string;
    chatTitle: string;
}

interface Message {
  id: number;
  texto: string;
  autor: string;
  hora: string;
}

export default function RoomChat() {
    const { chatUrl, chatTitle } = useAppContext() as AppContextType;
      const [mensagens, setMensagens] = useState<Message[]>([]);
  const [texto, setTexto] = useState('');

  const enviarMensagem = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (texto.trim() === '') return;

    const novaMensagem = {
      id: Date.now(),
      texto,
      autor: 'Você',
      hora: new Date().toLocaleTimeString(),
    };

    setMensagens((prev) => [...prev, novaMensagem]);
    setTexto('');
  };
    
    if (chatUrl === "/chat/") {
        return (
            <div className="left-[240px]absolute flex flex-col items-center justify-center h-screen w-[calc(100%-240px)]">
                <h2 className="text-xl font-semibold text-gray-800">
                    Click on a room to see its chat!
                </h2>
            </div>
        );
    }

    return (
        <div className="left-[240px] absolute flex flex-col justify-center h-screen w-[calc(100%-240px)] p-10">
        <h2 className="text-xl top-20 absolute font-bold mb-4 text-center">{chatTitle}</h2>

      <div className="flex flex-col items-start h-[calc(100vh-20rem)] gap-5">
        {mensagens.map((msg) => (
          <div key={msg.id} className="bg-green-300 px-2 rounded-md">
            <span className="font-semibold border-b-black border-b-2">{msg.autor}</span>{' '}
            <span className="text-xs text-gray-500">({msg.hora})</span>
            <p className="mt-1">{msg.texto}</p>
          </div>
        ))}
      </div>

      <form onSubmit={enviarMensagem} className="w-[calc(100%-240px)] left-[] flex gap-2">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 bottom-0 absolute w-[calc(100%-80px)] left-0"
        />
        <button
          type="submit"
          className="py-2 w-20 bg-green-400 text-white rounded hover:bg-blue-600 transition bottom-0 right-0 absolute"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}