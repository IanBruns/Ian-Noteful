import React from 'react'
import './ErrorBoundary.css'

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state={
            hasError: false
        }
    }
    static getDerivedStateFromError(err) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Uhhhhhh, something here didn't work.  Maybe try again?</h2>
            );
        }
        return this.props.children;
    }  
}

export default ErrorBoundary;