import { Component } from "react"
import type { ReactNode, ErrorInfo } from "react"

interface Props {
  children?: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedErrorFromState(_: Error): State {
    return { hasError: true }
  }

  public static componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("--Something went wrong--", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

export default ErrorBoundary
