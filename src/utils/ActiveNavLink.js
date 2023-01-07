import React from 'react';
import { Link } from 'gatsby';

const NavLink = (props) => (
  <Link
    {...props}
    getProps={linkProps => {
      // Using custom logic for "isCurrent"
      // const { isCurrent } = linkProps
      const isCurrent = props.to === linkProps.location.hash

      // debug

      // console.info(
      //   `linkProps ==> ${isCurrent}`,
      //   linkProps.location.hash,
      //   `props =>`,
      //   props.to
      // )
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