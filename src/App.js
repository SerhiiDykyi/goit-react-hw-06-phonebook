import React, { Component } from 'react';

import Wrapper from './components/Wrapper';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

// function App() {
//   return (
//     <Wrapper>
//       <Form onAddContact={this.addContact} />
//       <div className="App">
//         <h1>Работает</h1>
//       </div>
//     </Wrapper>
//   );
// }

// export default App;

class App extends Component {
  state = {};

  // componentDidMount() {
  //   this.setState({ contacts: getFromLS('contacts') });
  //   // const contacts = localStorage.getItem('contacts');
  //   // const parsedContacts = JSON.parse(contacts);

  //   // if (parsedContacts) {
  //   //   this.setState({ contacts: parsedContacts });
  //   // }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // if (this.state.contacts !== prevState.contacts) {
  //   //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   // }
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     saveToLS('contacts', contacts);
  //   }
  // }

  // addContact = ({ name, number }) => {
  //   if (name === '') {
  //     return alert('Please, fill out the form!');
  //   }
  //   const isExist = this.state.contacts.some(contact => contact.name === name);
  //   if (isExist) {
  //     return alert(`${name} is already in contacts`);
  //   }
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   this.setState(({ contacts }) => ({
  //     contacts: [...contacts, contact],
  //   }));
  // };

  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();
    return (
      <Wrapper>
        <Form onAddContact={this.addContact} />
        <Filter />
        <ContactList />
      </Wrapper>
    );
  }
}

export default App;
