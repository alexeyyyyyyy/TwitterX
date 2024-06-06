import React, { useContext } from 'react';
import Avatar from "./Avatar.jsx";
import { UserContext } from "../utils/useContext.js";

const Profile = () => {
    const { name, setName } = useContext(UserContext);

    const handleClick = () => {
        setName(prompt('Change Your Name ',name));
        console.log(name)
    };

    return (
        <div className={'user-stats'}>
            <Avatar size={'big'} onLeftClick={handleClick} />
            <h2>{name}</h2>
        </div>
    );
};

export default Profile;
