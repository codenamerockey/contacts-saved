import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';

const Contacts = () => {
  // gives this component access to all of the state
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact </h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => {
              return (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  return <ContactItem key={contact.id} contact={contact} />
                </CSSTransition>
              );
            })
          : contacts.map(contact => {
              return (
                <CSSTransition timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              );
            })}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
