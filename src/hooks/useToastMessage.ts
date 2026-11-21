import { useContext } from "react"
import ToastContext from "../store/ToastContext"

function useToastMessage() {
  const { message, onSetMessage } = useContext(ToastContext)
  return { message, onSetMessage }
}

export default useToastMessage
