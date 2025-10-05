// src/components/AI/ChatBot.tsx
import { useState, useEffect, useRef } from "react"
import { sendMessageToLLM } from "../../services/chatApi"
import type { ChatMessage } from "../../services/chatApi"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(true)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Olá, eu sou o EduAI. Como posso ajudar?" }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const handleSend = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    try {
      const reply = await sendMessageToLLM(newMessages, "ollama") // ou "openai"
      setMessages([...newMessages, { role: "assistant", content: reply }])
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Erro ao se comunicar com o EduAI." }
      ])
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="z-50 fixed h-[60%] w-[90%] max-w-md mb-30 rounded-lg bg-white bottom-0 right-4 shadow-xl border border-gray-300 flex flex-col overflow-hidden">
      <button
        type="button"
        className="absolute right-3 top-3 w-5 h-5 cursor-pointer active:scale-90 hover:scale-110 transition-all"
        onClick={() => setIsOpen(false)}
        aria-label="Fechar chat"
      >
        <img
          src="https://www.svgrepo.com/show/499592/close-x.svg"
          alt="Fechar"
          className="w-full h-full"
        />
      </button>

      <div className="flex-1 overflow-y-auto p-4 space-y-2 mt-10">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.role === "user"
                ? "bg-green-100 self-end text-right"
                : "bg-gray-200 self-start text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <p className="text-sm text-gray-500">Digitando...</p>}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t flex gap-2">
        <textarea
          className="flex-1 border border-gray-300 rounded-lg p-2 resize-none h-16"
          placeholder="Pergunte algo ao EduAI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
          aria-label="Campo de texto para mensagem"
        />
        <button
          className="px-4 py-2 font-semibold rounded bg-green-500 text-white hover:scale-105 active:scale-95 transition"
          onClick={handleSend}
          disabled={loading}
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
