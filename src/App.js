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
            <Route exact path="/" element={<MainMenu />}/>
            <Route exact path="/:username" element={<RepositoryName />}/>
            <Route exact path="/:username/:repositoryName" element={<UserRepositoryName />}/>
        </Routes>
    </>
  );
}

export default App;


