import * as React from "react";

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
export default Func