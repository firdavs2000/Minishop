import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

const Paginate: React.FC<{totalPages: number, currenPage: number, setParamPage: (value: number) => void}> = ({totalPages, currenPage, setParamPage}) => {
  const dispatch = useDispatch();

  const onPageChange = (event: { selected: number }) => {
    const selectedPage = event.selected + 1;
    setParamPage(selectedPage);
  };


  return (
    <ReactPaginate
      pageCount={Math.ceil(totalPages / 12)}
      initialPage={currenPage - 1}
      onPageChange={onPageChange}
      previousLabel="<<"
      nextLabel=">>"
      containerClassName="paginate"
      pageClassName="paginate_page"
      pageLinkClassName="paginate_link"
      previousClassName="paginate_prev"
      previousLinkClassName="paginate_link"
      nextClassName="paginate_next"
      nextLinkClassName="paginate_link"
      activeClassName="paginate_active"
    />
  );
};

export default Paginate;


