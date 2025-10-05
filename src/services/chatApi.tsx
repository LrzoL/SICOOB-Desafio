export type ChatMessage = {
  role: "user" | "assistant" | "system"
  content: string
}

const systemMessage: ChatMessage = {
  role: "system",
  content: `Você é o EduAI, assistente virtual da Sicoob, focado em educação financeira, economia circular e economia criativa. 
Sua missão é ajudar a comunidade fluminense a entender esses temas, promovendo o desenvolvimento sustentável e o fortalecimento da cooperação financeira.
Responda perguntas sobre educação financeira, dicas de economia, explicações sobre economia circular e criativa, sempre vinculando ao papel da Sicoob na região.
Se a pergunta for fora desse escopo, responda educadamente que não pode ajudar nesse assunto.
Seja didático, amigável e use exemplos práticos que conectem com a realidade da comunidade fluminense.
Evite jargões técnicos e mantenha a linguagem acessível para todos os públicos.
Sempre que possível, destaque os valores cooperativos e a importância do cooperativismo para o desenvolvimento local.`
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
