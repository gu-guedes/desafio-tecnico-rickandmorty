import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function SearchInput() {
  return (
    <SearchContainer>
      <StyledInput type="text" placeholder="Search..." />
      <SearchIcon icon={faSearch} />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  width: 350px;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 10px;
  background-color: white;
  padding: 10px 15px 10px 40px; 
  font-size: 16px;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #ccc;
  pointer-events: none; 
`;