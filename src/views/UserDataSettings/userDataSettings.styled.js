import styled from 'styled-components';
import { H4 } from '../../theme/typography';
import { Color } from '../../theme/colors';

export const Box = styled.div`
  padding: 15px;
  border-radius: 2px;
  border: solid 1px ${Color.lightGray};
`;

export const BoxTitle = styled(H4)`
  display: flex;
  align-items: center;
  color: ${Color.danger};
  margin-bottom: 15px;

  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`;