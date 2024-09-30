import data from './data';
import { useState } from 'react';

const App = () => {
  const [person, setPerson] = useState(data);
  return (
    <div>
      <h2>Birthday Reminder - Starter</h2>
      {console.log(person)}
      
    </div>
    
  )
};
export default App;
