import { createContext } from "react"

type Context = { message: string; onSetMessage: (newMessage: string) => void }

const ToastContext = createContext<Context>({
  message: "",
  onSetMessage: () => {},
})

export default ToastContext
