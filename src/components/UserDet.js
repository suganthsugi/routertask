import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDet() {
    const { id } = useParams()
  return (
    <div>UserDet... {id}</div>
  )
}
