import "./App.css";
import { useState } from "react";
import AuthPage from "../Auth/AuthPage";
import NewOrderPage from "../NewOrder/NewOrderPage";
import OrderHistoryPage from "../OrderHistory/OrderHistoryPage";
import { Routes, Route } from "react-router-dom"; //you can import more than one thing at a time
// Add the following import
import { getUser } from '../../utilities/users-service';
import NavBar from "../../components/NavBar/NavBar";

// export default function App() {
//   const [user, setUser] = useState(null); //is there a user? if yes, then new order page. if not, then send to auth page
//   return (
//     <main className="App">

//       {
//         user ? (
//           <>
//             <NavBar user={user} />
//             <Routes>
//               <Route path="/orders/new" element={<NewOrderPage />}></Route>{" "}
//               //using element to pass props since it's easier to pass props to
//               the component being rendered.
//               <Route path="/orders/" element={<OrderHistoryPage />}></Route>
//             </Routes>
//           </>
//         ) : (
//           <AuthPage />
//         ) //falsey
//       }
//     </main>
//   );
// }


// import './App.css';
// import { useState } from 'react'
// import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
// import { Routes, Route } from 'react-router-dom'
// import NavBar from '../../components/NavBar/NavBar';
// import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {user ?
      <>
          <NavBar user={user} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>}
    </main>
  );
}