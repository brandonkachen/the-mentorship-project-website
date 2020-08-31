import React, { useState } from "react"

const PaginationComp = ({ title, pages }) => {
  const [page, setPage] = useState(0)
  const prevOn = page === 0
  const nextOn = page === pages.length - 1

  return (
    <>
      <p className="title">{title}</p>

      {pages[page]}
      <nav
        className="pagination is-rounded"
        role="navigation"
        aria-label="pagination"
      >
        <button
          className="button is-light pagination-previous"
          disabled={prevOn}
          onClick={() => !prevOn && setPage((page - 1) % pages.length)}
        >
          ←
        </button>
        <button
          className="button is-light pagination-next"
          disabled={nextOn}
          onClick={() => !nextOn && setPage((page + 1) % pages.length)}
        >
          →
        </button>

        <ul className="pagination-list" />
      </nav>
    </>
  )
}

export default PaginationComp
