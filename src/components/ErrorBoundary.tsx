import React, {ErrorInfo, FunctionComponent} from 'react';

export interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component {
    state: ErrorBoundaryState = {
        hasError: false
    };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export const withErrorBoundary = (Component: FunctionComponent) => () => (
    <ErrorBoundary>
        <Component />
    </ErrorBoundary>
);

export default ErrorBoundary;
