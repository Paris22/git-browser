import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

import {Header, ButtonWrapper, Title, User, UserAvatar, Description} from "./user-repository-name.styled";
import {Avatar, Button} from "@mui/material";
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
            <Header>
                <User>
                    <UserAvatar>
                        <Avatar alt = "Avatar Repo" src={username} sx={{ width: 40, height: 40 }}/>
                    </UserAvatar>
                    <Title>{username} {repositoryName}</Title>
                </User>
                <ButtonWrapper>
                    <Button variant="outlined" href="#outlined-buttons" size="large">
                        <Link to={`/${username}`}>
                            Go back
                        </Link>
                    </Button>
                </ButtonWrapper>
            </Header>
            <Description>
                <ReactMarkdown>{userRepName}</ReactMarkdown>
            </Description>
        </div>
    );
};

export default UserRepositoryName;