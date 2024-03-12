// MyTable.tsx

import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import data from './userData.json'
import { useEffect } from 'react';



const sampleData = data;

const columns:any = [
  {
    Header: 'Username',
    accessor: 'username',
  },
  {
    Header: 'Designation',
    accessor: 'designation',
  },
  {
    Header: 'Phone Number',
    accessor: 'phoneNumber',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Region',
    accessor: 'region',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

function MyTable({search,handleSearch}:any) {
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
  }:any = useTable(
    {
      columns,
      data: sampleData,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, globalFilter }:any = state;

  useEffect(()=>{
    setGlobalFilter(search)
  },[search])

  return (
    <div className=' flex items-center flex-col'>
      <table {...getTableProps()} className='  w-full text-left text-xs font-light'>
        <thead className=' text-violet1'>
          {headerGroups.map((headerGroup:any) => (
            <tr {...headerGroup.getHeaderGroupProps()} className='  border-b  border-[#00000013] text-sm'>
              {headerGroup.headers.map((column:any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className=' pl-4 py-2'>
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
        <tbody {...getTableBodyProps()} className='  '>
          {page.map((row:any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className=' hover:bg-blue3/10  h-10   border-b  border-[#00000013] text-sm font-medium'>
                {row.cells.map((cell:any) => (
                  <td {...cell.getCellProps()} className=' h-10   pl-4 py-4'>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=' absolute bottom-0 self-center mb-5 flex justify-center gap-4 mt-10 bg-blueTable-100 text-center'>
      <button  onClick={() => previousPage()} disabled={!canPreviousPage} className='className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                            </svg>
  </button>
  {pageIndex > 2 && (
    <>
      <button onClick={() => gotoPage(0)} className=' px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
        1
      </button>
      <span className='px-3 py-1'>...</span>
    </>
  )}
  {Array.from({ length: Math.min(5, pageCount) }, (_, index) => {
    const pageNumber = pageIndex - 2 + index;
    if (pageNumber < 0 || pageNumber >= pageCount) return null;
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
  {pageIndex < pageCount - 3 && (
    <>
      <span className='px-3 py-1'>...</span>
      <button onClick={() => gotoPage(pageCount - 1)} className=' px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
        {pageCount}
      </button>
    </>
  )}
  

  <button onClick={() => nextPage()} disabled={!canNextPage}
                                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    aria-hidden="true" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                    </svg>
                                </button>
      </div>
    </div>
  );
}

export default MyTable;
