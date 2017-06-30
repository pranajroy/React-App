import React from 'react';
import update from 'immutability-helper';
import Profile from './Profile.jsx';
import { DropTarget } from 'react-dnd';

class ProfileContainer extends React.Component {


    constructor(props){
        super(props);
        this.state = { profiles: props.list };
    }

    pushProfile(profile) {
        this.setState(update(this.state, {
			profiles: {
				$push: [ profile ]
			}
		}));
	}

	removeProfile(index) {
	   this.setState(update(this.state, {
			profiles: {
				$splice: [
					[index, 1]
				]
			}
		}));
	}

	moveProfile(dragIndex, hoverIndex) {
		const { profiles } = this.state;
		const dragProfile = profiles[dragIndex];

		this.setState(update(this.state, {
			profiles: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragProfile]
				]
			}
		}));
	}

	updateProfile(profile, index){
	    const {name, age} = profile;

	    this.setState(update(this.state,{
          profiles:   {[index]: {name: {$set: [name]}, age: {$set: [age]} }}
        }))
	}

	render() {
		const { profiles } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		const style = {
			width: "200px",
			height: "604px",
			border: '1px dashed gray'
		};

		const backgroundColor = isActive ? 'lightgreen' : '#FFF';

		return connectDropTarget(
			<div style={{...style, backgroundColor}}>
				{profiles.map((profile, i) => {
					return (
						<Profile
							key={profile.id}
							index={i}
							listId={this.props.id}
							profile={profile}
							removeProfile={this.removeProfile.bind(this)}
							moveProfile={this.moveProfile.bind(this)}
							updateProfile={this.updateProfile.bind(this)}/>
					);
				})}
			</div>
		);
    }

}

const profileTarget = {
	drop(props, monitor, component ) {
		const { id } = props;
		const sourceObj = monitor.getItem();
		if ( id !== sourceObj.listId ) component.pushProfile(sourceObj.profile);
		return {
			listId: id
		};
	}
}

export default DropTarget("PROFILE", profileTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(ProfileContainer);
