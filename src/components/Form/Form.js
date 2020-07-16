import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';
import shortid from 'shortid';
import './Form.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  namberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onAddContact } = this.props;
    onAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className="form_container" onSubmit={this.handleSubmit}>
          <p>Name</p>
          <label htmlFor={this.nameInputId}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <p>Number</p>
          <label htmlFor={this.namberInputId}>
            <input
              className="form_label"
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button className="button" type="submit">
            Add contakt
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddContact: (name, number) =>
    dispatch(contactsActions.addContacts(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
