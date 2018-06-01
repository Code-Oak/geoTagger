import React, { Component } from 'react';
import TagCreate from './TagCreate';

class DataCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tag: '',
            tagCount: 0,
            tags: [],
        };
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClickSave = () => {
        const { tagCount, tag, tags } = this.state;
        if(tagCount) {

        } else {
            let updateTags = tags.concat(tag);
            this.setState({
                tags: updateTags
            });
        }
        let data = {
            name: this.state.name,
            tags: [tag],
        }
        this.props.onClick(data);
    }

    handleClickPlus = () => {
        
    }
    
    render(){
        const { tagCount } = this.state;
        let moreTags = [];
        if(tagCount) {
            for(let i = 0; i < tagCount; i++) {
                moreTags.push(<input type="text" name = {"tag"+i} value="" key={"tag"+i}/>);
            }
        }
        return (
            <div>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <br />
                <input type="text" name="tag" placeholder="tag" value={this.state.tag} onChange={this.handleChange} />
                <button>+</button>
                {moreTags}
                <br />
                <button onClick={this.handleClickSave}>SAVE</button>
            </div>
        );
    }
}

export default DataCreate;
