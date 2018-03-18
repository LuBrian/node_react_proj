import React , { Component } from 'react'
import Zone from './Zone'


class Zones extends Component {
	constructor(){
		super()
		this.state = {
			list:[
				{name : "zone 1", zipCode:"100031", numComments:10},
				{name:"zone 2", zipCode:"100032", numComments:11},
				{name:"zone 4", zipCode:"100034", numComments:14},
				{name:"zone 4", zipCode:"100034", numComments:15}
			]
		}
	}

	render(){

		const listItems = this.state.list.map((zone, i) => {
			return(
				<li key={i}><Zone currentZone={zone} /></li>

			)
		})
		return (
			<div>
				<ol>
					{listItems}
				</ol>
			</div>

		)
	}
}


export default Zones