import React, { Component } from 'react';

class TagCreate extends Component {
    render(){
        return (
            <div>
                <input type="text" name="tag" placeholder="tag"
                // value={this.state.name}
                // onChange={this.handleChange}
                />
                <button>+</button>

            </div>
        );
    }
}

export default TagCreate;