import { useAuth } from "../context/AuthContext";
const Home = () => {
 const {user} = useAuth();

 console.log(user);

  return (
    <div>
      <h1>BIENVENIDO!</h1>
    </div>
  );
};

export default Home;
