import React from 'react'
import PaginateData from "../src/helper/Pagination";

function Page() {
    const itemPerPage=6;
  return (
    <div>
        <h1> list of name</h1>
        <PaginateData itemsPerPage={itemPerPage}/>
    </div>
  )
}

export default Page