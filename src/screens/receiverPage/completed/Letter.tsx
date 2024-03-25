// MyTable.tsx

import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import data from './userData.json'
import { useEffect, useState } from 'react';

import Sent from './../../../assets/icons/sent.png'
import { useLocation } from 'react-router-dom';
import SearchIcon from './../../../assets/icons/search.png'


const sampleData = data.filter(item => item.status === 'accepted');


const columns: any = [
  {
    Header: 'Track Number',
    accessor: 'tracknumber',
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Requestor',
    accessor: 'requestor',
  },
  {
    Header: 'Document Type',
    accessor: 'doctype',
  },
  {
    Header: 'Date Submitted',
    accessor: 'datesubmitted',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];



function Letter() {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    setPageSize,

  }: any = useTable(
    {
      columns,
      data: sampleData,

    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex }: any = state;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const s = searchParams.get("search");

  const [search, setSearch] = useState<any>(s);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);

    window.history.pushState(
      null,
      "",
      `/dts/receive/dashboard?search=${e.target.value}`
    );
  };










  useEffect(() => {
    setPageSize(10)
  }, [])

  useEffect(() => {
    setGlobalFilter(search)
  }, [search])

  

  return (
    <div className=' bg-white relative flex flex-col h-full w-full overflow-hidden justify-between  mt-4'>
       <div className=" self-start relative  flex  px-3 py-1 border-border border  items-center w-[80%] sm:w-full bg-bgW rounded-md m-0  max-w-[400px] sm:max-w-full">
                <input
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="outline-none w-full bg-bgW text-xs pl-7 text-gray-900 py-1 "
                  type="search"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none mr-7px-4">
                  <img src={SearchIcon} alt="Search" className="h-5 w-5" />
                </div>
        </div>
      <div className='overflow-hidden'>
        <table {...getTableProps()} className='w-full text-xs font-light table-fixed'>
          <thead className='text-[#0077FF] h-[20px]'>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()} className='border-b border-[#00000013] text-sm'>
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className='pl-4 py-2 text-left truncate' // Add truncate class
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <span>▼</span>
                        ) : (
                          <span>▲</span>
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>
        <div className='overflow-y-auto overflow-x-hidden  min-h-[300px] h-full pb-10 '>
          <table className='w-full text-xs font-light table-fixed'>
            <tbody {...getTableBodyProps()} className='overflow-hidden w-full'>
              {page.map((row: any,key:any) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className={key%2==0?' cursor-pointer hover:bg-[#ffe34638] h-10 border-b border-[#00000013] text-sm font-medium bg-[#e8ebef]':' cursor-pointer hover:bg-[#ffe34638] border-b border-[#00000013] text-sm font-medium bg-[#d0d7df]'}
                  >
                    {row.cells.map((cell: any) =>

                    (
                      cell.column.Header == "Track Number"?
                    
                    
                    <td key={cell.column.id} className=' h-10 pl-4 py-4 text-left text-[#163961] font-semibold truncate'> {/* Add truncate class */}

                    <div className=' flex items-center gap-2'>
                      <img src={Sent} className=' h-4 object-contain' alt="" />
                        {cell.render('Cell')}
                    </div>
                     
                      </td> :

                      <td key={cell.column.id} className='h-10 pl-4 py-4 font-semibold text-[#163961] text-left truncate'> {/* Add truncate class */}
                      {cell.render('Cell')}
                      </td> 
                       
                    )


                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className=' hidden sm:flex  h-[10%] k w-full items-center bottom-0 self-center mb-2  justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center'>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className='className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
        </button>

        <p className=' text-xs'> <b>{pageIndex + 1} </b> / {pageCount}</p>


        <button onClick={() => nextPage()} disabled={!canNextPage}
          className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </button>
      </div>

      <div className=' sm:hidden  min-h-[60px] items-center   w-full  bottom-0 self-center mb-2 flex justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center'>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className='className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
        </button>
        {pageIndex > 2 && pageCount > 5 && (
          <>
            <button onClick={() => gotoPage(0)} className=' px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              1
            </button>
            <span className='px-3 py-1'>...</span>
          </>
        )}
        {Array.from({ length: Math.min(5, pageCount) }, (_, index) => {
          let pageNumber: any;
          if (pageCount <= 5 || pageIndex < 3) {
            pageNumber = index;
          } else if (pageIndex > pageCount - 4) {
            pageNumber = pageCount - 5 + index;
          } else {
            pageNumber = pageIndex - 2 + index;
          }
          return (
            <button
              key={pageNumber}
              onClick={() => gotoPage(pageNumber)}
              className={`px-3 py-1 border  ${pageIndex === pageNumber ? 'h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg bg-orange text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' : 'h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}`}
            >
              {pageNumber + 1}
            </button>
          );
        })}
        {pageIndex < pageCount - 3 && pageCount > 5 && (
          <>
            <span className='px-3 py-1'>...</span>
            <button onClick={() => gotoPage(pageCount - 1)} className=' px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              {pageCount}
            </button>
          </>
        )}



        <button onClick={() => nextPage()} disabled={!canNextPage}
          className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Letter;
