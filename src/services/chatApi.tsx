export type ChatMessage = {
  role: "user" | "assistant" | "system"
  content: string
}

const systemMessage: ChatMessage = {
  role: "system",
  content: `Você é EduAI, assistente do Sicoob voltado para a educação financeira, economia circular e economia criativa, com foco na comunidade fluminense.
Sua missão é promover o desenvolvimento sustentável e fortalecer o cooperativismo financeiro.
Responda de forma didática, amigável e com exemplos práticos do cotidiano local.
Se a pergunta for fora desses temas, diga educadamente que não pode ajudar.
Use linguagem simples e destaque sempre que possível o papel do Sicoob e os valores cooperativistas.`
}

export async function sendMessageToLLM(
  messages: ChatMessage[],
  provider: "ollama" | "openai" = "ollama"
): Promise<string> {
  
  const messagesWithContext = [systemMessage, ...messages]

  if (provider === "ollama") {
    const res = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        messages: messagesWithContext,
        stream: false,
      }),
    })

    const data = await res.json()
    return data.message?.content ?? "Erro: sem resposta do modelo."
  }

  if (provider === "openai") {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messagesWithContext,
      }),
    })

    const data = await res.json()
    return data.choices?.[0]?.message?.content ?? "Erro: sem resposta da OpenAI."
  }

  throw new Error("Provedor LLM desconhecido.")
}
