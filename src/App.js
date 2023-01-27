
import { createContext, useState } from 'react';
import Counter from './Pages/Counter';
// import LongForm from './Pages/LongForm';

// import ShortForm from './Pages/ShortForm';

export const CounterContest = createContext()

function App() {
  const [counter, setCounter] = useState(0);

  const valueInfo = { counter, setCounter };

  return (
    <CounterContest.Provider value={valueInfo}>
      <div>
        <Counter></Counter>
        {/* <LongForm /> */}
        {/* <ShortForm /> */}
      </div>
    </CounterContest.Provider>
  );
}

export default App;