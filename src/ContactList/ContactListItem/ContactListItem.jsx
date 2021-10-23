import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

function ContactListItem({ id, name, number, onDelete }) {
  return (
    <span className={s.contactWrap}>
      <span>
        <span className={s.contactName}>{name}:</span>
        <span className={s.contactNumber}>{number}</span>
      </span>
      <button
        className={s.contactDeleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </span>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
