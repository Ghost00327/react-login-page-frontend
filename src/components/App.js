import Header from './Header';
import LeftMain from './LeftMain';
import RightMain from './RightMain';
import "tailwindcss/tailwind.css"
import FirstLogin from './FirstLogin'
import ScondLogin from './SecondLogin'
function App() {
  return (
    <div>
    <FirstLogin/>
    <ScondLogin/>
  </div>
  );
}

export default App;

// class Login extends React.Component {
//   render() {
//      return (
//       <div className="w-screen">
//         <Header/>   
//         <FirstLogin/>
//         <ScondLogin/>
//       </div>
//      )
//   }
// }
// export default Login;

// class Users extends React.Component {
//   render() {
//      return (
//       <div className="w-screen">
//         <Header/>
//       <div className="flex justify-between">     
//         <LeftMain/>
//         <RightMain/>
//       </div>
//     </div>
//      )
//   }
// }
// export default Users;