import React from 'react';
import './styles.css';

const Spinner = ({ loading, children }) => {
    if (loading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }    
    return children;
}

export default Spinner;
