import React from 'react';
import { mobile } from './responsive';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const SearchBar = () => {
  return (
    <FilterContainer>
      <Filter>
        <FilterText>Filter Blogs:</FilterText>
        <Select>
          <Option disabled selected>
            Breed
          </Option>
          <Option>Poodle</Option>
          <Option>Golden Retriver</Option>
          <Option>Haski</Option>
          <Option>Saymoyed</Option>
          <Option>Groodle</Option>
          <Option>Chihuahua</Option>
        </Select>
        <Select>
          <Option disabled selected>
            Size
          </Option>
          <Option>XS</Option>
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Blogs:</FilterText>
        <Select>
          <Option selected>Newest</Option>
        </Select>
      </Filter>
    </FilterContainer>
  );
};

export default SearchBar;
