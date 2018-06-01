import React, { Component } from 'react';
import DataCreate from './DataCreate';
import DataDisplay from './DataDisplay';

class Tagger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas : [{
                id: 0,
                name: '',
                tags: [],
            }]
        };
    }

    handleClickSave = (data) => {
        const { datas } = this.state; 
        let addData = {
            id: datas[datas.length - 1].id,
            name: data.name,
            tags: data.tags,
        };
        console.log(addData);
    }

    render(){
        return (
            <div>
              <DataCreate onClick={this.handleClickSave}/>
              <DataDisplay />
            </div>
        );
    }
}

export default Tagger;
