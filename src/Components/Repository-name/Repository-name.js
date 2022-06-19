import React from 'react';
import {useParams, Link} from "react-router-dom";
import {ListItemText} from "@mui/material";

const RepositoryName = ({usersRep}) => {
    const {username} = useParams()

    return (
        <div>
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