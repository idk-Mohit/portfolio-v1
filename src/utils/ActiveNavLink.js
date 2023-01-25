import React from 'react';
import { Link } from 'gatsby';

const NavLink = (props) => (
  <Link
    {...props}
    getProps={linkProps => {
      const isCurrent = props.to === linkProps.location.hash
      return {
        style: {
          color: isCurrent ? "var(--bg-green)" : "var(--bg-gray)"
        }
      }
    }}
  />
)

export default NavLink;

// NavLink code taken from https://codesandbox.io/u/dance2die