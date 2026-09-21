import api from "../utils/axios"

interface Message {
  body: string
  id: string
  created: string
}

interface Client {
  name: string
  email: string
  message: string
}

interface ResponseObject {
  name: string
  email: string
  messages: Message[]
}

export async function createClient({
  name,
  email,
  message,
}: Client): Promise<string> {
  const response = await api.post("/clients", {
    message,
    email,
    name,
  })
  return response.data
}

export async function getAllClients(): Promise<ResponseObject> {
  const response = await api.get("/clients")
  return response.data
}
