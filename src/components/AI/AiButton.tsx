import { useState } from "react";
import ChatBot from "./ChatBot.tsx";

export default function AiButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <button type="button" className="fixed right-5 bottom-10 z-10 px-8 py-3 font-semibold rounded-full bg-green-400 shadow-md shadow-green-400/50 hover:scale-110 transition-all cursor-pointer active:scale-90" onClick={() => setIsOpen(!isOpen)}>EduAI</button>
            {isOpen && <ChatBot />}
        </div>
    );
}