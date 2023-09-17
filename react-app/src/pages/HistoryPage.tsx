import RequireAuth from "../components/Authentication/RequireAuth";
import History  from "../components/History/History";


const HistoryPage = () =>{

    return <History/>
};

export default RequireAuth(HistoryPage);