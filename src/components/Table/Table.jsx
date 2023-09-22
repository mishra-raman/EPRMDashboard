import React, { useState } from 'react';

const Table = ({ table, selected, setCompare, setData }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCompareRow, setSelectedCompareRow] = useState(null);
  const handleSelect = (sa, isSelected) => {
    if (sa === selectedRow) {
      console.log(sa, 'sa');
      setSelectedRow(null);
      setSelectedCompareRow(null);
      setCompare(null);
      setData(null);
      return;
    }
    console.log(isSelected, 'selected');
    if (isSelected) {
      if (sa.Company_Name === selectedCompareRow.Company_Name) {
        setSelectedCompareRow(null);
        setCompare(null);
      } else {
        selectedRow(null);
      }
    }
    if (selectedRow && selectedRow.Company_Name) {
      setSelectedCompareRow(sa);
      setCompare(sa);
    } else {
      setSelectedRow(sa);
      setData(sa);
    }
  };

  const setCompareData = (compareData) => {
    setSelectedCompareRow(null);
    setCompare(null);
  };

  if (!table.length) {
    return <div>Upload File</div>;
  }

  return (
    <div className='max-w-12xl mx-auto '>
      <div className='flex flex-col'>
        <div className='-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>
            <table className='min-w-full'>
              <thead>
                <tr className='bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider'>
                  <th className='px-6 py-3 text-left font-medium'>Select</th>
                  <th className='px-6 py-3 text-left font-medium'>Vendor ID</th>
                  <th className='px-6 py-3 text-left font-medium'>Name</th>
                  <th className='px-6 py-3 text-left font-medium'>Location</th>
                  <th className='px-6 py-3 text-left font-medium'>
                    Supplier Type{' '}
                  </th>
                  <th className='px-6 py-3 text-left font-medium'>Category</th>
                  <th className='px-6 py-3 text-left font-medium'>Revenue</th>
                  {selectedCompareRow && (
                    <th className='px-6 py-3 text-left font-medium'>Remove</th>
                  )}
                </tr>
              </thead>

              <tbody className='bg-white'>
                {table.map((sa) => {
                  const isRowSelected =
                    selectedRow === sa || selectedCompareRow === sa || false;

                  return (
                    <tr key={sa.Vendor_ID}>
                      <td
                        className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'
                        onClick={() => handleSelect(sa, isRowSelected)}
                      >
                        <input
                          className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                          type='checkbox'
                          checked={isRowSelected}
                        />
                      </td>

                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                        <div className='text-sm leading-5 text-gray-900'>
                          {sa.Vendor_ID}
                        </div>
                      </td>
                      <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                        <div class='flex items-center'>
                          <div class='flex-shrink-0 h-10 w-20'>
                            {sa.Company_Name}
                          </div>
                          <div class='ml-4'>
                            <div class='text-sm leading-5 font-medium text-gray-900'></div>
                          </div>
                        </div>
                      </td>
                      <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                        <div class='text-sm leading-5 text-gray-900'>
                          {sa.Geographic_Location}
                        </div>
                      </td>
                      <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                        <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          {sa.Supplier_Type}
                        </span>
                      </td>
                      <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                        {sa.Product_Category}
                      </td>
                      <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                        {sa.Annual_Revenue}
                      </td>
                      {selectedCompareRow && (
                        <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                          {!Boolean(
                            selectedCompareRow &&
                              selectedRow &&
                              selectedCompareRow.Company_Name !==
                                sa.Company_Name
                          ) ? (
                            <div onClick={() => setCompareData(null)}>
                              REMOVE
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
