import styled from 'styled-components';

export const ReadOnly = styled.span`
  pointer-events: none;
`;

export const Disabled = styled(ReadOnly)`
  opacity: 0.5;
`;