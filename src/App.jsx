import data from './data';
import { useState } from 'react';

const App = () => {
  const [person, setPerson] = useState(data);
  return (
    <div>
      <h2>{person.length} Birthdays this Month</h2>
      {console.log(person)}
      {person.map((people) => {
        const {id, name, age, image} = people
        return (
          <div key={id}>
            <img src={image} alt={name} style={{width: '10rem', height: '10rem'}}/>
            <h2>{name}</h2>
            <h3>{age}</h3>
          </div>
        )
      })}
      
    </div>
    
  )
};
export default App;
