import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'
import { rhythm } from '../../utils/typography'
import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      <div style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
      }}>
        {!isRoot && (
          <Link to={`/`} className="link">
            {title}
          </Link>
        )}
        <GitHubIcon />
      </div>
    </div>
  )
}
