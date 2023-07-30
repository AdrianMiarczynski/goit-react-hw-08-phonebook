import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './contactslist.module.css';
import { deleteContacts } from 'components/redux/operations';
import {
  selectContacts,
  selectFilterContacts,
} from 'components/redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contats = useSelector(selectContacts);
  const FilterContact = useSelector(selectFilterContacts);

  const filter = contats.filter(person =>
    person.name.toLowerCase().includes(FilterContact.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filter.map(({ name, id, number }) => (
        <li key={id} className={css['list__items']}>
          {name}: <span>{number}</span>
          <button
            type="submit"
            className={css['list__items-btn']}
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.protoTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};
