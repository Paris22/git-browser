import React from 'react';
import {Avatar, Button} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {Header, ButtonWrapper, Title, User, UserAvatar} from "./Upper-header.styled";

const UpperHeader = ({userData}) => {
    const {username, repositoryName} = useParams()
    if (username) {
        return (
            <Header>
                <User>
                    <UserAvatar>
                        <Avatar alt="Avatar Repo" src={userData['avatar_url']} sx={{width: 40, height: 40}}/>
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
        );
    }
    if (repositoryName) {
        return (
            <Header>
                <User>
                    <UserAvatar>
                        <Avatar alt="Avatar Repo" src={userData['avatar_url']} sx={{width: 40, height: 40}}/>
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
        )
    }
};

export default UpperHeader;