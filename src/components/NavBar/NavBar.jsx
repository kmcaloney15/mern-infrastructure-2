// import './NavBar.css'
// import {Link} from 'react-router-dom'

// export default function NavBar({user}) {
  
//     return (
//       <nav>
//         <Link to="/orders">Order History</Link>
//         &nbsp; | &nbsp;
//         <Link to="/orders/new">New Order</Link>
//         &nbsp; | &nbsp;
//         <p>Welcome, {user.name} </p>
//       </nav>
//     );
//   }

import './NavBar.css'
import { Link } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user }) {
  function handleLogOut(){
    //Delegate to the users-service modle
    userService.logOut()
    // Update state will also cause a re-render
    setUser(null);

  }

    return(
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            Welcome, { user.name }
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}