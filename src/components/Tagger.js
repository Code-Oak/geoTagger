import React, { Component } from 'react';
import DataCreate from './DataCreate';
import DataDisplay from './DataDisplay';
import fetch from 'isomorphic-fetch';
import './styles.css';

class Tagger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas : [{
              id: 0,
              name: '',
              tags: [],
						}],
						displayDatas : [{
							name: '',
							tags: []
						}]
        };
		}
		
		handleChange = (e) => {
			console.log('value: ',e.target.value);
			this.handleDisplay(e.target.value);
		}

		handleDisplay = (value) => { ///// This will become a new post request to the server
			let selectedDatas = this.state.datas.filter( (data) => {
				for(let i = 0; i < data.tags.length; i++) {
					if(data.tags[i] === value) {
						return true;
					}
				}
				return false;
			});
			this.setState({
				displayDatas : selectedDatas
			});
		}

    handleClickSave = (data) => {
        const { datas } = this.state; 
        let addData = {
            id: datas[datas.length - 1].id + 1,
            name: data.name,
            tags: data.tags,
        };
        // this.setState({
        //     datas : datas.concat(addData)
        // });
				let that = this;
        fetch('/addLocation', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(addData), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => {
              return res.json()
            })
          .catch(error => console.error('Error:', error))
					.then(response => {
						that.setState({
							datas : datas.concat(response)
						});
						console.log('Success:', response)
					});
		}
		componentDidMount = () => {
			let that = this;
			const { datas } = this.state; 
			fetch('/getResults')
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				that.setState({
					datas : datas.concat(myJson)
				});
				console.log('myJson: ',myJson);
			});
		}

    render(){
				const { datas, displayDatas } = this.state;
        return (
            <div>
              <DataCreate onClick={this.handleClickSave}/>
              <DataDisplay datas={datas} displayDatas={displayDatas} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Tagger;
