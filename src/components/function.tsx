import * as React from "react";
import {FunctionComponent} from "react";

interface IProps {
    name: string
    age: number
}

// 这里面的props 也可以使用结构的方法来用
const Func = (props: IProps) => {
    const [name, setName] = React.useState(props.name)
    return (
        <div>{props.age} {props.name}
            <p>{name}</p>
        </div>
    )
}
// 也可以这种写法
const Func1: React.FunctionComponent<IProps> = ({age,name}) => {
    const [name1, setName] = React.useState(name)
    return (
        <div>
            {age} {name}
            <p>{name1}</p>
        </div>
    )
}
export {Func, Func1}