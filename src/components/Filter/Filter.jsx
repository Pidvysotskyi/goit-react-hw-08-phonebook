import { Input, Lable } from 'components/InputForm/InputForm.styled';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <Lable>
      Find contact by name
      <Input type="text" value={filterValue} onChange={changeFilter} />
    </Lable>
  );
};
