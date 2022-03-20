import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">No links</p>
  }

  return (
    <div className="col-md-9 mx-auto mt-5 table-responsive">
        <table className="table table-bordered align-middle">
      <thead>
      <tr>
        <th>№</th>
        <th>Original</th>
        <th>Shorted</th>
        <th>Open</th>
      </tr>
      </thead>

      <tbody>
      { links.map((link, index) => {
        return (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Открыть</Link>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
    </div>
  )
}