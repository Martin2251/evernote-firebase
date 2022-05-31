import React from 'react'
import {Link,NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    
<Router>
<Navbar>
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
</Navbar>

</Router>
  
  )
}

export default Navbar