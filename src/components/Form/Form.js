import React, { Component } from 'react';
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

    if (this.state.name !== '' && this.state.number !== '') {
      onAddContact(this.state);
      this.reset();
      return;
    }
    alert('Please fill out the form');
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
export default Form;
