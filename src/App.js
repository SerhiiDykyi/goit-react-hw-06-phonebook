import React from 'react';

import Wrapper from './components/Wrapper';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <Wrapper>
      <Form />
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default App;
