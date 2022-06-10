import React, {useState} from 'react';
import {TextField, Button} from "@mui/material";
import {ButtonWrapper, MainMenuWrapper} from "./main-menu.styled";
import {Link} from "react-router-dom";


const MainMenu = () => {
    const [username, setUsername] = useState('')
    const changeInputField = (e) => {
            setUsername(e.target.value)
    }

    return (
        <MainMenuWrapper>
            <TextField id="outlined-basic" label="Outlined" variant="standard" size="small"
                       value={username}
                       onChange={changeInputField}
            />
            <ButtonWrapper>
                <Button variant="outlined" href="#outlined-buttons" size="large">
                    <Link to={`/${username}`}>
                        Link
                    </Link>
                </Button>
            </ButtonWrapper>
        </MainMenuWrapper>

    );
};

export default MainMenu;