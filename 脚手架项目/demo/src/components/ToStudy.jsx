import React from 'react';

class ToStudy extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>ToStudy</h2>
                {this.props.children.map((child, index) => 
                    <h1 key={index}>123</h1>
                )}
                {this.props.children}
            </div>
        )
    }
    componentDidMount() {
        console.log("mount");
    }
}

export default ToStudy;