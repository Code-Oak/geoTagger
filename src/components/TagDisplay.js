import React, { Component } from 'react';
import TagItemList from './TagItemList';

class TagDisplay extends Component {
    render(){
        return (
            <div>
                <select>
                    <option value="">-- select an tag --</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    <option value="bmw">BMW</option>
                </select>
                <TagItemList />
            </div>
        );
    }
}

export default TagDisplay;
