import React, {useEffect, useState} from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';

import './Sidebar.css';
import SidebarChat from './sidebar-chat/SidebarChat';
import db from '../firebase';

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    /*Получение данных из БД*/
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => setRooms(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, []);

    return (
        //  BEM naming convention - имя класса названа как боковая панель
        <div className="sidebar">

            {/*Боковая панель разделена на секции - разделы*/}
            {/*Заголовок. Аватар. Настройки*/}
            <div className="sidebar__header">

                {/*Установим MaterialUI для иконок*/}
                <Avatar/>

                {/*Контейнер с иконками*/}
                <div className="sidebar__headerRight">
                    {/*Обертка для нажатия на иконку*/}
                    <IconButton>
                        {/*Истории*/}
                        <DonutLargeIcon/>
                    </IconButton>

                    <IconButton>
                        {/*Для создания нового чата*/}
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        {/*Для большей информации*/}
                        <MoreVertIcon/>
                    </IconButton>
                </div>

            </div>

            {/*Поиск*/}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <IconButton>
                        {/*Иконка поиска*/}
                        <SearchOutlined/>
                    </IconButton>
                    {/*Поле для ввода*/}
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>

            {/*Чат*/}
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room =>
                    (
                    <SidebarChat
                        key={room.id}
                        id={room.id}
                        name={room.data.name}/>
                    )
                )}
            </div>
        </div>
    );
}

export default Sidebar;






















