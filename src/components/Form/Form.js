import React, { Component } from 'react';
import shortid from 'shortid';
import './Form.scss';
import { ToastContainer } from 'react-toastify';
import { addSuccess, emptyForm, isExistContact } from './ToastersInfo';

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
    const { onAddContact, isExistName } = this.props;
    const { name } = this.state;

    const normalizedName = name.toLowerCase();
    const isExist = isExistName.some(
      item => item.name.toLowerCase() === normalizedName,
    );
    if (isExist) {
      isExistContact(name);
      this.reset();
      return;
    }

    if (this.state.name !== '' && this.state.number !== '') {
      onAddContact(this.state);
      addSuccess();
      this.reset();
      return;
    }
    emptyForm();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <ToastContainer />
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
              placeholder="000-00-00"
              pattern="[0-9]{3}[-][0-9]{2}[-][0-9]{2}"
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
