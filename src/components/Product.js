import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <h3>Product</h3>
        <Link to="cars">Cars</Link>
        <br /><br />
        <Link to="bikes">Bikes</Link>
        <br /><br />
        <h1><Outlet /></h1>
    </div>
  )
}
