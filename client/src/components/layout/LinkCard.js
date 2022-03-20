import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <div className="col-md-8 mx-auto mt-5">
      <h2 className="mb-4">Your link detail view</h2>

      <p>Long link: <a href={link.to} target="_blank">{link.to}</a></p>
      <p>From: <a href={link.from} target="_blank">{link.from}</a></p>
      <p>Clicks: <strong>{link.clicks}</strong></p>
      <p>Date of create: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </div>
  )
}