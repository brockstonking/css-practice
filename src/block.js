import React, { Component } from 'react';

class Block extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='block' >{ this.props.class }</div>
        )
    }
}

export default Block;