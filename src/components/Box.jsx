import styled from 'styled-components';
import {
  typography,
  space,
  color,
  flexbox,
  layout,
  border,
} from 'styled-system';

const Box = styled('div')(typography, space, color, flexbox, layout, border);

export default Box;
