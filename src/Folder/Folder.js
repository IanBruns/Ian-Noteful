import React from 'react';
import './Folder.css'

class Folder extends React.Component {
    render() {
        return <div className='Folder'>
            <h3>{this.props.name}</h3>
        </div>
    }
}

export default Folder;