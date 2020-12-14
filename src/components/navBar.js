import React from "react"
import { Link } from "gatsby"

const NavBar = () => (
    <div style={{ display: `flex` , flexDirection: `row` , justifyContent: `flex-end` }}>
      <Link to="/" style={{ paddingRight: `10px` }}>Home</Link>
      <br/>
      <Link to="/about/" style={{ paddingRight: `10px` }}>About</Link>
    </div>
)

export default NavBar