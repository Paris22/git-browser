import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import {useParams , Link} from "react-router-dom";

import {Header, Title, User, UserAvatar, ButtonWrapper} from "./repository-name.styled";
import {Avatar, Button, ListItemText} from "@mui/material";



const RepositoryName = () => {
    const {username} = useParams()
    const [usersRep, setUsersRep] =  useState([])
    // const [usersImg, setUsersImg] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}/repos`).then(res =>{
            setUsersRep(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
        return () => {}
    }, [username])

    // useEffect(() => {
    //     axios.get(`https://avatars.githubusercontent.com/u/${id}?v=4`).then(res => {
    //         setUsersImg(res.data)
    //     })
    // }, [usersImg])


    return (
        <div>
            <Header>
                <User>
                    <UserAvatar>
                        <Avatar alt = "Avatar Repo" src={usersRep.avatar_url} sx={{ width: 40, height: 40 }}/>
                    </UserAvatar>
                    <Title>{username} repositories</Title>
                </User>
                <ButtonWrapper>
                    <Button variant="outlined" href="#outlined-buttons" size="large">
                        <Link to="/">
                            Go back
                        </Link>
                    </Button>
                </ButtonWrapper>
            </Header>
            <div className="repositoryList">
                <ul>
                    {usersRep.map(rep => {
                        return <ListItemText key={rep.id}>
                            <Link to={`/${username}/${rep.name}`}>
                                {rep.name}
                            </Link>
                        </ListItemText>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RepositoryName;