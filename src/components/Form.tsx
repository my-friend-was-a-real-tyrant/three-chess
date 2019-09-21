import React, {Component} from "react";

interface IProps {
    name: string,
    age?: number
}

interface IState {
    name: string
    [key: string]: string | number
}

// 类型别名
// type IProps = {
//     name: string,
//     age?: number
// }
// 如果没有IProps的话那么就使用 {} 传
export default class Form extends Component<IProps, IState> {
    state = {
        name: '陈靖'
    }
    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget
        this.setState({
            [name]: value
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                {this.props.name} - {this.props.age}
                {this.state.name}
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
        );
    }
}