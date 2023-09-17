import RequireAuth from "../components/Authentication/RequireAuth";
import Home from "../components/Home/Home";


const HomePage = () =>{

    return <Home/>
};

export default RequireAuth(HomePage);