import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import { FilterWrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      Filter by name
      <input
        type="text"
        name="name"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </FilterWrapper>
  );
};
