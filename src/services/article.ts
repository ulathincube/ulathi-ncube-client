import api from "../utils/axios"

interface User {
  firstname: string
  lastname: string
  username: string
}

interface Post {
  id: string
  title: string
  body: string
  published: boolean
  likes: number
  created: string
  updated: string
  author: User
}

export async function getAllPosts(): Promise<Post[]> {
  const response = await api.get("/posts")
  return response.data
}
