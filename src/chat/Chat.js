import React, {useEffect, useState} from 'react';
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import {IconButton} from '@material-ui/core';
import {SearchOutlined, AttachFile, MoreVert} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {

    //useState - всегда возвращае массив, состоящий из двух элементов
    //1 - состояние - по умолчанию равно дефолтному значению (т.е. '')]
    //2 - функция, позволяющая изменять данное состояние
    const [seed, setSeed] = useState('');

    const[input, setInput] = useState('');

    /*Hook жизненного цикла. Запускается, когда компонент загружен*/
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (event) => {
        event.preventDefault(); //Чтобы страница не перезагружалась
        console.log(input);
        console.log(event);
        setInput('');
    }

    return (
        <div className="chat">

            {/*Чат разделен на секции - разделы*/}
            {/*Заголовок чата*/}
            <div className="chat__header">
                {/*Аватар*/}
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                {/*Контейнер с иконками*/}
                <div className="chat__headerRight">
                    {/*Обертка для нажатия на иконку*/}
                    <IconButton>
                        {/*Для большей информации*/}
                        <MoreVert/>
                    </IconButton>
                    {/*Обертка для нажатия на иконку*/}
                    <IconButton>
                        {/*Иконка поиска*/}
                        <SearchOutlined/>
                    </IconButton>
                    {/*Обертка для нажатия на иконку*/}
                    <IconButton>
                        {/*Для прикрепления файлов*/}
                        <AttachFile/>
                    </IconButton>
                </div>
            </div>

            {/*Чат*/}
            <div className="chat__body">
                {/*Если это наше сообщение, то помечаем его зеленым цветом*/}
                <p className={`chat__message ${false && 'chat__reciever'}`}>
                    <span className="chat__name">
                        Mikhail Filippov
                    </span>
                    Hey Guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>
                <p className="chat__message">
                    Hey Guys
                </p>
            </div>

            {/*Текстовое поле для ввода ссобщения*/}
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form className="test">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    );
}

export default Chat;
