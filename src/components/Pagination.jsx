import React from "react";
import { ButtonGroup, Button, Select } from '@chakra-ui/react'

const Pagination = ({page,handlePrevPage,handleNextPage,handleFirstPage,handleLastPage,totalCount,handleLimit}) => {
  // console.log(page) 

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={() => handleFirstPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={() => handlePrevPage(page-1)}>Prev</Button>
      <Select data-cy="pagination-limit-select"  onChange={(e) => handleLimit(e.target.value)}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={() => handleNextPage(page+1)}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={() => handleLastPage(totalCount-(page+1))}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
