import React from 'react';
import {Description} from "./user-repository-name.styled";
import ReactMarkdown from 'react-markdown'

const UserRepositoryName = ({userRepName}) => {

    return (
        <div>
            <Description>
                <ReactMarkdown>{userRepName}</ReactMarkdown>
            </Description>
        </div>
    );
};

export default UserRepositoryName;