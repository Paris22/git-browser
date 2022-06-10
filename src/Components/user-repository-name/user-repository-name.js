import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";
import ReactMarkdown from 'react-markdown'

const UserRepositoryName = () => {
    const {username} = useParams()
    const {repositoryName} = useParams()
    const [userRepName, setUserRepName] = useState()
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/${username}/${repositoryName}/master/README.md`).then(it =>{
            setUserRepName(it.data)
        })
            .catch((err) => {
                console.log(err)
            })
        return  () => {}
    }, [username, repositoryName])

    return (
        <div>
            <header>
                <h1>{username} {repositoryName}</h1>
                <Button variant="outlined" href="#outlined-buttons" size="large">
                    <Link to={`/${username}`}>
                        Go back
                    </Link>
                </Button>
            </header>
            <div className="description">
                <ReactMarkdown>{userRepName}</ReactMarkdown>
            </div>
        </div>
    );
};

export default UserRepositoryName;