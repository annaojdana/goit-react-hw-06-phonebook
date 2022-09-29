import styles from './App.module.css';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import React from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

const App = () => {
  const { wrapper } = styles;

  const contactsList = useSelector(state => {
    return state.contacts;
  });
  console.log(contactsList);
  return (
    <div className={wrapper}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <>
          <Filter />
          <ContactList />
        </>
      </Section>
    </div>
  );
};

export default App;
