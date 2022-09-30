
import Sidebar from './Sidebar';
import Feed from './Feed'
import Login from './Login';


function Home() {
  const user = sessionStorage.getItem("user");
  if (user) {
   return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  )} else {
   return <Login />
  }
  
}

export default Home;
