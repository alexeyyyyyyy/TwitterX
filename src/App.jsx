
import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import { UserContext } from "./utils/useContext.js";

const App = () => {
    const [followers, setFollowers] = useState(100);
    const [following, setFollowing] = useState(1000);
    const [images, setImages] = useState([
        "https://gravatar.com/avatar/1?d=monsterid", "https://gravatar.com/avatar/7?d=monsterid",
        "https://gravatar.com/avatar/2?d=monsterid", "https://gravatar.com/avatar/8?d=monsterid",
        "https://gravatar.com/avatar/3?d=monsterid", "https://gravatar.com/avatar/9?d=monsterid",
        "https://gravatar.com/avatar/4?d=monsterid", "https://gravatar.com/avatar/10?d=monsterid",
        "https://gravatar.com/avatar/5?d=monsterid", "https://gravatar.com/avatar/11?d=monsterid",
        "https://gravatar.com/avatar/6?d=monsterid", "https://gravatar.com/avatar/12?d=monsterid"
    ]);
    const [name, setName] = useState('Monster');

    return (
        <div className={'app'}>
            <UserContext.Provider value={{ images,name,setName}}>
                <Header/>
                <Content/>
            </UserContext.Provider>
        </div>
    );
};

export default App;
