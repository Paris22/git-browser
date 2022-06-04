import {
    Routes,
    Route,
} from "react-router-dom";
import MainMenu from "./Components/main-Menu/main-menu";
import RepositoryName from "./Components/repository-name/repository-name";
import UserRepositoryName from "./Components/user-repository-name/user-repository-name";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainMenu />}/>
            <Route path="/rep-name" element={<RepositoryName />}/>
            <Route path="/user-rep-name" element={<UserRepositoryName />}/>
        </Routes>
    </>
  );
}

export default App;


