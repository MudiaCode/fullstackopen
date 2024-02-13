import {useState} from "react";

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    // creates an array for text to be added
    const [text, setText] = useState([])
    const [total, setTotal] = useState(0)

    // when button is clicked it will add text "Left/Right" to the text array above and add 1 to the current state
    const lButton = () => {
        setText(text.concat('Left'))
        setLeft(left + 1)
        setTotal(left + right)
        console.log('rendering left... ' + (left + 1))
    }
    const rButton = () => {
        setText(text.concat('Right'))
        setRight(right + 1)
        setTotal(left + right)
        console.log('rendering right... ' + (right + 1))
    }


    return (
        <div>
            <L left={left}/>
            <Button button={lButton} text={"Left"}/>
            <Button button={rButton} text={"right"}/>
            <R right={right}/>

            {/* joins all the concat text into a single string using array.join() function */}
            <History text={text}/>
            <Total total={total}/>
        </div>
    )
}

const Button = ({button, text}) => {
    return (
        <button onClick={button}>
            {text}
        </button>
    )
}

const L = ({left}) => {
    return (
        <>
            {left}
        </>
    )
}
const R = ({right}) => {
    return (
        <>
            {right}
        </>
    )
}

const History = ({text}) => {
    if (text.length === 0) {
        return (
            <div>
                This app is used by pressing buttons!
            </div>
        )
    }
    return (
        <div>
            <p>
                Button press history: {text.join(' ')}
            </p>
        </div>
    )
}

const Total = ({total}) => <p>Total = {total}</p>

export default App
