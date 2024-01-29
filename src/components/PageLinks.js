import { pageLinks } from '../data'

import React from 'react'

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link
        return (
          <li key={id}>
            <a href={href} className={childClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
