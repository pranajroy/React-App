import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './ProfileContainer.jsx';

class Dashboard extends React.Component {

    render(){

    const style = {
			display: "flex",
			justifyContent: "space-around",
			paddingTop: "20px"
		}

		const listOne = [
			{ id: 1, name: "Andrew", age: "28" },
			{ id: 2, name: "Mike", age: "29" },
			{ id: 3, name: "John", age: "35" }
		];

		const listTwo = [
			{ id: 4, name: "Dean", age: "28" },
			{ id: 5, name: "Ben", age: "29" },
			{ id: 6, name: "Nick", age: "25" }
		];

		return (
			<div style={{...style}}>
				<Container id={1} list={listOne} />
				<Container id={2} list={listTwo} />
			</div>
		);

    }

}

export default DragDropContext(HTML5Backend)(Dashboard);
