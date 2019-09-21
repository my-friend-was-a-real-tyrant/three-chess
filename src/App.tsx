import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import {Func,Func1} from './components/function'
const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">

                {/*start*/}
                <Form name={'chenjing'} age={30}/>
                <Func name={'chenjing'} age={123}/>
                <Func1 name={'CHENJING'} age={123124}/>
                {/*end*/}

                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
