import React from 'react'
import TagStyle from './Tags.module.css'

export default function Tags({children}) {
  return (
    <span className={TagStyle.tags}>
        {children}
    </span>
  )
}
