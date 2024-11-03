import React, { ReactNode } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
};

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<Props> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) return <h1>Error</h1>;

    return this.props.children;
  }
}

export default ErrorBoundary;
