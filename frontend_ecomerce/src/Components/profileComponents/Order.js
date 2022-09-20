import React from 'react'

export const Order = () => {
  return (
      <div className='d-flex justify-center align-items-center flex-column'>
        {/*  
        
        */}
          <div className='table-responsive'>
              <table className='table'>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>STATUS</th>
                          <th>DATA</th>
                          <th>TOTAL</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className={'alert-success'}>
                          <td>
                              <a href={`/`} className="link">1</a>
                          </td>
                          <td>Paid</td>
                          <td>Dec 12 2021</td>
                          <td>$234</td>
                      </tr>
                      {/* Cancelled */}
                      <tr className={'alert-danger'}>
                          <td>
                              <a href={`/`} className="link">2</a>
                          </td>
                          <td>Not Paid</td>
                          <td>Dec 12 2021</td>
                          <td>$34</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  )
}
