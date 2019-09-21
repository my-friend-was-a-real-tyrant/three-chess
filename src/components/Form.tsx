import React, {Component} from "react";

interface IProps {
    name: string,
    age?: number
}

interface  IState {
    name:string
}
// 类型别名
// type IProps = {
//     name: string,
//     age?: number
// }
// 如果没有IProps的话那么就使用 {} 传
export default class Form extends Component<IProps,IState> {
    state={
        name:'陈靖'
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                {this.props.name} - {this.props.age}
                {this.state.name}
            </div>
        );
    }
}