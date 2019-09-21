import React, {Component} from "react";

interface IProps {
    name: string,
    age?: number
}
// 类型别名
// type IProps = {
//     name: string,
//     age?: number
// }

export default class Form extends Component<IProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                {this.props.name} - {this.props.age}
            </div>
        );
    }
}