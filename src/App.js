// import './App.css';
// import Login from './pages/Login';
// import Homepage from './pages/Dashboard';
// import SignUp from './pages/Signup';
// import { Router, Routes } from "react-router-dom"

// function App() {
//   return (
//     <>
//         <div className="App d-flex">
//           <Router>
//             <Routes path="/" element={<Login />} exact />
//             <Routes path="/dashboard" element={<Homepage />} />
//             <Routes path="/signUp" element={<SignUp />} />
//           </Router>
//         </div>
//     </>
//   );
// }

// export default App;



import './App.css';
import Login from './pages/Login';
import Homepage from './pages/Dashboard';
import SignUp from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App d-flex">
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Homepage />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
    </Router>
      </div>
  );
}

export default App;

