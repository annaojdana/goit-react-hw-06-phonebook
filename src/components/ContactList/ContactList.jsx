import styles from './ContactList.module.css';
import { Notification } from 'components/Notification/Notification';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions/contactsActions';

const ContactList = () => {
  const { wrapper, text, button } = styles;

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts
    .filter(c => c.name.toLowerCase().includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name));

  const dispatch = useDispatch();
  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={wrapper}>
          {filteredContacts.map(contact => {
            return (
              <li className={text} key={contact.id}>
                <span>{`${contact.name}: ${contact.number}`}</span>
                <button
                  type="button"
                  className={button}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification message="You don't have this contact" />
      )}
    </>
  );
};

export default ContactList;
