import {
    Routes,
    Route, useParams,
} from "react-router-dom";
import MainMenu from "./Components/Main-menu/Main-menu";
import RepositoryName from "./Components/Repository-name/Repository-name";
import UserRepositoryName from "./Components/User-repository-name/User-repository-name";
import UpperHeader from "./Components/Upper-header/Upper-header";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
    const {username, repositoryName} = useParams()
    const [userData, setUserData] = useState([])
    const [usersRep, setUsersRep] = useState([])
    const [userRepName, setUserRepName] = useState([])


    useEffect(() => {
        if (username) {
            axios.get(`https://api.github.com/users/${username}`).then(res => {
                setUserData(res.data)
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [username])

    useEffect(() => {
        if (username) {
            axios.get(`https://api.github.com/users/${username}/repos?per_page=100&direction=desc`).then(res => {
                setUsersRep(res.data)
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [username])

    useEffect(() => {
        if (username && repositoryName) {
            axios.get(`https://raw.githubusercontent.com/${username}/${repositoryName}/master/README.md`).then(it => {
                setUserRepName(it.data)
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [username, repositoryName])

    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainMenu/>}/>
            </Routes>
            <UpperHeader userData={userData}>
                <Routes>
                    <Route exact path="/:username" element={<RepositoryName usersRep={usersRep}/>}/>
                    <Route exact path="/:username/:repositoryName"
                           element={<UserRepositoryName userRepName={userRepName}/>}/>
                </Routes>
            </UpperHeader>
        </>
    );
}

export default App;


