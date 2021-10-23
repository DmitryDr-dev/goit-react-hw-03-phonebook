import { Component } from 'react';

// import components
import Container from './Container/Container';
import Section from './Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [...contacts],
      filter: '',
    };
  }

  // DONE function to process data send on form submission
  // ! necessary to check whether the new contact is duplicated in current DB
  formSubmitHandler = newContact => {
    this.setState(prevState => {
      const normalizedNewName = newContact.name.toLowerCase();
      const prevContacts = prevState.contacts;

      if (
        prevContacts.find(
          contact => contact.name.toLowerCase() === normalizedNewName,
        )
      ) {
        return alert(`${newContact.name} already exists!`);
      }

      return { contacts: [...prevContacts, newContact] };
    });
  };

  // DONE function to delete contact
  onDeleteContact = toDeleteId => {
    this.setState(prevState => {
      const prevContacts = prevState.contacts;

      return {
        contacts: prevContacts.filter(contact => contact.id !== toDeleteId),
      };
    });
  };

  // DONE function to track changes on filter input
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  // DONE functions to show filtered contacts
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const {
      state: { filter },
      formSubmitHandler,
      changeFilter,
      getFilteredContacts,
      onDeleteContact,
    } = this;

    return (
      <Container>
        <h1>Your Contacts</h1>
        <Section>
          <AddContactForm onSubmit={formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getFilteredContacts()}
            onDelete={onDeleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
