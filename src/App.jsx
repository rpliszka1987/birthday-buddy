import data from './data';
import { useState } from 'react';
import Person from '../src/components/Person'

const App = () => {
  const [person, setPerson] = useState(data);
  return (
    <div>
      <h2>{person.length} Birthdays this Month</h2>
      {console.log(person)}
      {person.map((people) => {
        return (
          <Person person={people}/>
        )
      })}
      
    </div>
    
  )
};
export default App;
