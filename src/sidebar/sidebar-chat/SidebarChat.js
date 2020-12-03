import React, {useState, useEffect} from 'react';
import {Avatar} from '@material-ui/core';
import './SidebarChat.css';
import db from '../../firebase';

function SidebarChat({id, name, addNewChat}) {

    //useState - всегда возвращае массив, состоящий из двух элементов
    //1 - состояние - по умолчанию равно дефолтному значению (т.е. '')]
    //2 - функция, позволяющая изменять данное состояние
    const [seed, setSeed] = useState('');
    /*Hook жизненного цикла. Запускается, когда компонент загружен*/
    useEffect(() => {
        setSeed(
            Math.floor(
                Math.random() * 5000
            )
        )
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            //Добавление нового чата
            db.collection('rooms').add({
                name: roomName
            });
        }
    };

    //Если не addNewChat, то рендерим боковую панель с чатами
    return !addNewChat ? (
        <div className="sidebarChat">
            {/*Рандомное изображение*/}
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message ...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat;
