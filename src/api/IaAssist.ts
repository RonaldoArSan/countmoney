const API_KEY = import.meta.env.VITE_OPENAI_API_KEY as string;

if (!API_KEY) {
  throw new Error("A chave VITE_OPENAI_API_KEY não foi encontrada no arquivo .env.");
}

/**
 * Chama a API do ChatGPT para auxiliar em conversões ou consultas relacionadas a moedas.
 * @param prompt Mensagem ou consulta que será enviada para o ChatGPT.
 * @returns A resposta do modelo ChatGPT.
 */
export async function getCurrencyAssistResponse(prompt: string): Promise<string> {
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  
  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "Você é um assistente especializado em conversões de moedas e informações financeiras." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 150
  };
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro na API do OpenAI: ${errorText}`);
  }
  
  const data = await response.json();
  return data.choices[0].message.content;
}
