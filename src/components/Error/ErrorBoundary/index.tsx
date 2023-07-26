import { Component, ErrorInfo, ReactNode } from "react";

import Error from "../ErrorLoadBook";

  interface Props {
    children?: ReactNode;
  }

  interface State {
    hasError: boolean;
  }

  class ErrorBoundary extends Component<Props, State> {
    public state: State = {
      hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
      return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error(<Error/>, error, errorInfo);
    }

    public render() {
      if (this.state.hasError) {
        return <Error/>;
      }

      return this.props.children;
    }
  }

export default ErrorBoundary;