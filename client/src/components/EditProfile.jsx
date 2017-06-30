import React from 'react';
import Modal from 'react-modal';

export default class EditProfile extends React.Component {
    
        constructor() {
            super();
        
            this.state = {
              modalIsOpen: false
            };
        
            this.openModal = this.openModal.bind(this);
            this.afterOpenModal = this.afterOpenModal.bind(this);
            this.closeModal = this.closeModal.bind(this);
        }

        openModal() {
            this.setState({modalIsOpen: true});
        }
    
        afterOpenModal() {
            // references are now sync'd and can be accessed.
            this.subtitle.style.color = '#f00';
        }
    
        closeModal() {
            this.setState({modalIsOpen: false});
        }

        render() {
            
            const { name, age } = this.props.profile;
            

            return (
              <div>
                <a className="pull-right" href="javascript:void(0)" onClick={this.openModal}> Edit </a>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
            
                  <h4 ref={subtitle => this.subtitle = subtitle}>Update Profile for {name}</h4>
                  <form className="form-horizontal" role="form">
                   <div className="form-group">
                      <label  className="col-sm-2 control-label"
                         htmlFor="inputEmail3">Name</label>
                      <div className="col-sm-10">
                         <input type="text" className="form-control" 
                            id="inputText" placeholder="Name" defaultValue={name} ref={input => this._name = input}/>
                      </div>
                   </div>
                   <div className="form-group">
                      <label  className="col-sm-2 control-label"
                         htmlFor="inputEmail3">Age</label>
                      <div className="col-sm-10">
                         <input type="text" className="form-control" 
                            id="inputAge" placeholder="Age" defaultValue={age} ref={input => this._age = input}/>
                      </div>
                   </div>
                   <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                         <button type="submit" className="btn btn-default" onClick={this._handleUpdate.bind(this)}>Update</button>
                      </div>
                   </div>
                </form>
                  
                </Modal>
              </div>
            );
        }
        
        _handleUpdate(e){
            e.preventDefault()
            this.props.onUpdate({name: this._name.value, age: this._age.value, id: this.props.profile.id});
            this.closeModal();
        }
}

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};