import data from './data';
import { useState } from 'react';
import Person from '../src/components/Person'

const App = () => {
  const [person, setPerson] = useState(data);
  const handleDataReset = () => {
    setPerson([])
  }
  return (
    <div>
      <h2>{person.length} Birthdays this Month</h2>
      {console.log(person)}
      {person.map((people) => {
        return (
          <Person person={people}/>
        )
      })}
      <button type='button' className='btn' onClick={handleDataReset}>Clear List</button>
    </div>
    
  )
};
export default App;
