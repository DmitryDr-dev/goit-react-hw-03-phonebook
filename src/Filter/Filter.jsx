import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  const filterInputId = uuidv4();

  return (
    <div className={s.filter}>
      <label htmlFor={filterInputId} className={s.filterLabel}>
        Filter by Name
      </label>
      <input
        type="text"
        className={s.filterInput}
        id={filterInputId}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
