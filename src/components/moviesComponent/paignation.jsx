import React from 'react';
import propTypes from 'prop-types';
import _ from 'lodash';

const Paignation = (props) => {
  const { itemsCount, itemsPerPage, onPageChange, currentPage} = props;
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);
  if (pagesCount === 1 ) return null;
  const pages = _.range(1, pagesCount + 1);

  return (  
     <div>
        <ul className="pagination">
          { pages.map( page => (
            <li key={page} className={ page === currentPage ? "page-item active" : "page-item"}>
            <a class="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>))}
        </ul>
      </div>
  );
}

Paignation.propTypes = { 
  itemsCount: propTypes.number.isRequired, 
  itemsPerPage:propTypes.number.isRequired, 
  currentPage: propTypes.number.isRequired,
  onPageChange:propTypes.func.isRequired 
}
export default Paignation;

