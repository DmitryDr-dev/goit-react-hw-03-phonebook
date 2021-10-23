import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './AddContactForm.module.css';

class AddContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      number: '',
    };
  }

  // Unique IDs for inputs
  nameInputId = uuidv4();
  numberInputId = uuidv4();

  // function to update state
  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  // function to send state to parent
  handleSubmit = e => {
    e.preventDefault();

    const { props, state } = this;

    const newContactId = uuidv4();
    const newContact = { id: newContactId, ...state };

    props.onSubmit(newContact);

    this.clearState();
  };

  // method to clear state
  clearState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const {
      state: { name, number },
      handleSubmit,
      handleInputChange,
      nameInputId,
      numberInputId,
    } = this;

    return (
      <form className={s.addContactForm} onSubmit={handleSubmit}>
        <label className={s.addContactFormLabel} htmlFor={nameInputId}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nameInputId}
          value={name}
          onChange={handleInputChange}
          className={s.addContactFormInput}
        />
        <label className={s.addContactFormLabel} htmlFor={numberInputId}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={numberInputId}
          value={number}
          onChange={handleInputChange}
          className={s.addContactFormInput}
        />
        <button type="submit" className={s.AddContactFormBtn}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default AddContactForm;
