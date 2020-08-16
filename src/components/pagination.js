import React, { useState } from "react"

const PaginationComp = ({ title, pages }) => {
  const [page, setPage] = useState(0)
  const prevOn = page === 0
  const nextOn = page === pages.length - 1

  return (
    <>
      <p class="title">{title}</p>

      {pages[page]}
      <nav
        class="pagination is-rounded"
        role="navigation"
        aria-label="pagination"
      >
        <a
          class="pagination-previous"
          disabled={prevOn}
          onClick={() => !prevOn && setPage((page - 1) % pages.length)}
        >
          ←
        </a>
        <a
          class="pagination-next"
          disabled={nextOn}
          onClick={() => !nextOn && setPage((page + 1) % pages.length)}
        >
          →
        </a>

        <ul class="pagination-list" />
      </nav>
    </>
  )
}

export default PaginationComp
