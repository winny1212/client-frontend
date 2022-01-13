import React, { useState } from 'react';
import { mobile } from './responsive';
import styled from 'styled-components';
import { dogBreeds } from '../../data/breedsData.js';

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

const FilterBar = (props) => {
  const { filters, setFilters, sort, setSort } = props;

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // console.log(filters);

  return (
    <FilterContainer>
      <Filter>
        <FilterText>Filter Blogs:</FilterText>
        <Select name="breed" onChange={handleFilters}>
          <Option disabled>Breed</Option>
          {dogBreeds.map((breed) => (
            <Option value={breed.label} key={breed.id}>
              {breed.label}
            </Option>
          ))}
        </Select>
        <Select name="size" onChange={handleFilters}>
          <Option disabled>Size</Option>
          <Option value="small">small</Option>
          <Option value="medium">medium</Option>
          <Option value="mlarge">large</Option>
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Blogs:</FilterText>
        <Select onChange={(e) => setSort(e.target.value)}>
          <Option value="newest">Newest</Option>
        </Select>
      </Filter>
    </FilterContainer>
  );
};

export default FilterBar;
