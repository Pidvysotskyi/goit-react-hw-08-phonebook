import { Input } from "./Filter.styled";
import { selectFilter } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { StyledLable } from "components/Shareble.styled";

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <StyledLable>
      Find contact by name
      <Input type="text" value={filterValue} onChange={changeFilter} />
    </StyledLable>
  );
};
