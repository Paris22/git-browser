import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import {useParams , Link} from "react-router-dom";
import {Button} from "@mui/material";


const RepositoryName = () => {
    const { username } = useParams()
    const [usersRep, setUsersRep] =  useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}/repos`).then(it =>{
            setUsersRep(it.data)
        })
            .catch((err) => {
                console.log(err)
            })
        return () => {}
    }, [username])


    return (
        <div>
            <header>
                <h1>{username} repository</h1>
                <Button variant="outlined" href="#outlined-buttons" size="large">
                    <Link to="/">
                        Go back
                    </Link>
                </Button>
            </header>
            <div className="repositoryList">
                <ul>
                    {usersRep.map(user => {
                        return <li key={user.id}>
                            <Link to={`/${username}/${user.name}`}>
                                {user.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RepositoryName;