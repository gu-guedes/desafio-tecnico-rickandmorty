import { styled } from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
  background-color: #1e1e1e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #bb86fc;
`;

export const Title = styled.h1`
  color: #bb86fc;
  font-size: 2em;
  cursor: pointer;
`;
