import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-600" style={{ padding: "clamp(16px, 4vw, 48px)" }}>
          <div className="w-full" style={{ maxWidth: "min(640px, 100%)" }}>
            <h1 className="font-bold" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>Something went wrong</h1>
            <p className="mt-2 break-words" style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}>{this.state.error?.message || 'An unexpected error occurred.'}</p>
            <button
              className="mt-4 bg-blue-600 text-white rounded"
              style={{ padding: "clamp(8px, 1.2vw, 12px) clamp(16px, 2vw, 24px)", fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;