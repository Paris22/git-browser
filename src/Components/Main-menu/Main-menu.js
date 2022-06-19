import React, {useState} from 'react';
import {TextField, Button} from "@mui/material";
import {ButtonWrapper, MainMenuWrapper, Title, SearchField, Subtitle} from "./main-menu.styled";
import {Link} from "react-router-dom";


const MainMenu = () => {
    const [username, setUsername] = useState('')
    const changeInputField = (e) => {
            setUsername(e.target.value)
    }

    return (
        <MainMenuWrapper>
            <div className="Description">
                <Title>Git browser</Title>
                <Subtitle>Please enter the name of the user whose repositories you want to view</Subtitle>
            </div>
            <SearchField>
                <TextField id="outlined-basic" label="Username" variant="standard" size="small"
                           value={username}
                           onChange={changeInputField}
                />
                <ButtonWrapper>
                    <Button variant="outlined" href="#outlined-buttons" size="large">
                        <Link to={`/${username}`}>
                            Search
                        </Link>
                    </Button>
                </ButtonWrapper>
            </SearchField>
        </MainMenuWrapper>

    );
};

export default MainMenu;