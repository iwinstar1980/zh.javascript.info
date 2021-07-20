import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// //受控组件 Square 类组件的写法
// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         }
//     }
//
//     render() {
//         return (
//             <button className="square"
//                     // 在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]这样的格式
//                     onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

//受控组件 Square 函数组件的写法
// 如果你想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    //由Game组件统一管理state，所以这里的构造函数就不需要了
    //    constructor(props) {
    //        super(props);
    //        this.state = {
    //            squares: Array(9).fill(null),
    //            xIsNext: true,
    //        }
    //    }

    // 在 React 中，有一个命名规范，通常会将处理事件的监听方法命名为 handle[Event] 这样的格式
    handleClick(i) {
        // 调用了 .slice() 方法创建了 squares 数组的一个副本，而不是直接在现有的数组上进行修改
        const squares = this.state.squares.slice();
        // 当有玩家胜出时，或者某个 Square 已经被填充时，该函数不做任何处理直接返回
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "胜者：" + winner;
        } else {
            status = '接下来是 ' + (this.state.xIsNext ? 'X' : 'O') + ' 方下棋';
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{squares: Array(9).fill(null)}],
            xIsNext: true,
        };
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}