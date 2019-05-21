import React from 'react'

export default class BodyContainer extends React.Component {

    render() {
        return (
            <div className="col">
                {this.props.children}
            </div>
        )
    }
}