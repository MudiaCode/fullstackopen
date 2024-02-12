const App = () => {
    const name = 'Peter'
    const occupation = 'builder'
    const recruits = [
        {name: 'Steve', age: 21},
        {name: 'Bob', age: 42}
    ]
    const friends = ['Mike', 'James', 'Niah']
    return (
        <>
            <h1>Greetings</h1>
            <div>
                <p>{recruits[0].name} {recruits[0].age}</p>
                <p>{recruits[1].name} {recruits[1].age}</p>

                <p>{friends}</p>
            </div>

            <div>
                <Hello name='Mudia' occupation='Software Developer'/>
                <Hello name={name} occupation={occupation}/>
            </div>

            <Footer/>
        </>
    )
}
const Hello = (props) => {
    console.log(props)
    return (
        <div>
        <p>My name is {props.name} and I'm a {props.occupation}</p>
        </div>
    )
}

const Footer = () => {
    return (
    <div>
        Greeting App Created by <a href={'https://github.com/MudiaCode'}>Mudia Osagie</a>
    </div>
        )
}


export default App