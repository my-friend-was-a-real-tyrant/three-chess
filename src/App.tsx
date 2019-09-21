import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import {Func, Func1} from './components/function'

enum Players {
    None,
    One,
    Two
}

interface IState {
    board: number[]
}

type ONGOING_GAME = -1;
const ONGOING_GAME = -1;
const App: React.FC = () => {
    const [board, setBoard] = useState<number[]>([Players.None, Players.None, Players.None, Players.None, Players.None, Players.None, Players.None, Players.None, Players.None])
    const [nextPlayerTurn, setNextPlayerTurn] = useState(Players.One)
    const [gameIsWon, setGameIsWon] = useState<ONGOING_GAME>(ONGOING_GAME)

    const checkIfGameIsOver = (board: Players[]) => {
        if (board[0] === board[1] && board[1] === board[2] && board[2] !== Players.None) {
            return board[0];
        } else if (board[3] === board[4] && board[4] === board[5] && board[5] !== Players.None) {
            return board[3];
        } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== Players.None) {
            return board[8];
        } else if (board[0] === board[3] && board[3] === board[6] && board[6] !== Players.None) {
            return board[0];
        } else if (board[1] === board[4] && board[4] === board[7] && board[7] !== Players.None) {
            return board[1];
        } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== Players.None) {
            return board[2];
        } else if (board[0] === board[4] && board[4] === board[8] && board[8] !== Players.None) {
            return board[0];
        } else if (board[2] === board[4] && board[4] === board[6] && board[6] !== Players.None) {
            return board[2];
        }

        return ONGOING_GAME;
    }

    const handleCellClick = (index: number) => {
        if (gameIsWon !== ONGOING_GAME || board[index] !== Players.None) return
        let newBoard = board.slice();
        newBoard[index] = nextPlayerTurn;
        setGameIsWon(gameIsWon => checkIfGameIsOver(newBoard) as any);
        setNextPlayerTurn(nextPlayerTurn => 3 - nextPlayerTurn);
        setBoard(board => newBoard);
        console.log(nextPlayerTurn)
    }
    const renderCell = (index: number, key: number) => {
        // TODO:click的时候每次都执行了函数 一共执行了9遍
        console.log(index, board[index])
        return (
            <div onClick={() => handleCellClick(key)} data-player={board[key]} className="cell" key={key}>{index}</div>
        )
    }

    const renderStatus = () => {
        const winningText = gameIsWon !== Players.None ? `Player ${gameIsWon} won` : 'The game is draw'
        return (
            <div style={{marginTop: "30px"}}>
                {"player 1 is green"} <br/>
                {"player 1 is red"} <br/>
                { gameIsWon === ONGOING_GAME ? 'Game is ongoing' : winningText } <br/>

            </div>
        )
    }

    const renderBoard = () => {
        return (
            <div className="board-container">
                {/*{renderCell(1)}*/}
                {board.map((value, index) => {
                    return renderCell(value, index)
                })}
            </div>
        )
    }


    return (
        <div className="App">
            <header className="App-header">

                {/*三联棋start*/}
                {renderBoard()}
                {renderStatus()}
                {renderStatus()}
                {/*三联棋end*/}

                {/*start 基础*/}
                <hr/>
                <Form name={'chenjing'} age={30}/>
                <hr/>
                <Func name={'chenjing'} age={123}/>
                <hr/>
                <Func1 name={'CHENJING1'} age={123124}/>
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
