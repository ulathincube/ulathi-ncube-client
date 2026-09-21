import api from "../utils/axios"

interface User {
  firstname: string
  lastname: string
  username: string
}

interface Article {
  id: string
  intro: string
  title: string
  body: string
  published: boolean
  likes: number
  created: string
  updated: string
  author: User
}

interface Response {
  data: Article[]
  error: null | Error
  message: string
}

export async function getAllArticles(): Promise<Response> {
  const response = await api.get("/articles")
  return response.data
}
