const Person = (props) => {
    const {id, name, age, image} = props.person;
    return (
        <div key={id}>
            <img src={image} alt={name} style={{width: '10rem', height: '10rem'}}/>
            <h2>{name}</h2>
            <h3>{age}</h3>
        </div>
    )
}

export default Person;