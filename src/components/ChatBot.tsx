
import { useState } from "react";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed h-[60%] w-[80%] mb-10 rounded-lg bg-gray-300 bottom-0">
            <button type="button" className="absolute right-3 top-3 w-5 h-5 cursor-pointer active:scale-90 hover:scale-110 transition-all" onClick={() => {
                setIsOpen(false);
            }}>
                <img src="https://www.svgrepo.com/show/499592/close-x.svg" alt="" />
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-full h-full p-4 rounded-t-lg flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-gray-800">Olá, eu sou o EduAI, como posso ajudar?</h2>
                </div>
                <textarea placeholder="Pergunte algo para o EduAI..." className="border border-gray-400 w-[90%] rounded-lg p-2 h-16 max-w-md resize-none m-3"></textarea>
                <button type="button" className="px-8 py-3 font-semibold rounded-full bg-green-400 shadow-md shadow-green-400/50 hover:scale-110 transition-all cursor-pointer active:scale-90 mb-5" onClick={() => {}}>Enviar</button>
            </div>
        </div>
    );
}