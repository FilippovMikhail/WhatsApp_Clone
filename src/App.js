import './App.css';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';

function App() {
    return (
        //  BEM naming convention - название класса как компонент
        <div className="app">
            {/*Тело приложения*/}
            <div className="app__body">
                {/*Sidebar. Боковая панель. С левой стороны*/}
                <Sidebar/>
                {/*Chat. Чат. С правой стороны*/}
                <Chat/>
            </div>
        </div>
    );
}

export default App;
