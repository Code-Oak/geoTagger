import React, { Component } from 'react';
import './styles.css';

class DataCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tag: '',
            tagCount: 0
        };
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClickSave = () => {
        const { name, tag, tagCount } = this.state;
        let data = {};
        let tags = [tag];
        if(tagCount) {
            let tagsElems = document.getElementsByClassName('tags');
            for(let i = 0; i < tagsElems.length; i++) {
                tags.push(tagsElems[i].value);
            }
        }
        data.name = name;
        data.tags = tags;
    
        this.setState({
            name: '',
            tag: '',
            tagCount: 0
        });
        this.props.onClick(data);
    }

    handleClickPlus = () => {
        let updateTagCount = this.state.tagCount+1;
        this.setState({
            tagCount: updateTagCount
        });
    }
    
    render(){
        const { tagCount } = this.state;
        let moreTags = [];
        if(tagCount) {
            for(let i = 0; i < tagCount; i++) {
                moreTags.push(<input className="tags" type="text" name = {"tag"+i+1} placeholder="tag" key={"tag"+i+1}/>);
            }
        }
        return (
            <div>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <br />
                <input className="tag" type="text" name="tag" placeholder="tag" value={this.state.tag} onChange={this.handleChange} />
                <button onClick={this.handleClickPlus}>+</button>
                {moreTags}
                <br />
                <button onClick={this.handleClickSave}>SAVE</button>
            </div>
        );
    }
}

export default DataCreate;
