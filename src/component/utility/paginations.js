import React from "react";
import ReactPaginate from "react-paginate";

function Paginations({ pageCount, onPage }) {
  let handlePageClick = (data) => {
 
    onPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="... "
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={"pagination justify-content-center my-4 "}
      previousClassName={"page-item px-1"}
      previousLinkClassName={"page-link fs-4"}
      nextClassName={"page-item px-1"}
      nextLinkClassName={"page-link fs-4"}
      disabledClassName={"disabled"}
      activeClassName={"active"}
      pageClassName={"page-item px-1 "}
      pageLinkClassName={"page-link fs-4 "}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
    />
  );
}

export default Paginations;
