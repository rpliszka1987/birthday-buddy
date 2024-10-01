import data from './data';
import { useState } from 'react';
import Person from '../src/components/Person'

const App = () => {
  const [person, setPerson] = useState(data);
  const handleDataReset = () => {
    setPerson([])
  }
  return (
    <main>
      <section className='container'>
        <h3>{person.length} Birthdays this Month</h3>
        {person.map((people) => {
          return (
            <Person person={people}/>
          )
        })}
        <button type='button' className='btn btn-block' onClick={handleDataReset}>Clear List</button>
      </section>
    </main>
    
  )
};
export default App;
