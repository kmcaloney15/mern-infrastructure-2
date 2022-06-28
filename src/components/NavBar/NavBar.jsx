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

export default function NavBar({ user }) {
    return(
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            Welcome, { user.name }
        </nav>
    )
}