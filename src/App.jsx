import { useState } from 'react'

import './App.css'
import { Ligth } from './Components/Ligth';
function App() {
  const [ligthSelection, setLightSelection] = useState();
  

  const ligthGroup = [
    {'id': 'red', 'color' : 'box-ligth-red', 'handle' : null, 'status': false},
    {'id': 'yellow', 'color' : 'box-ligth-yellow', 'handle' : null, 'status': false},
    {'id': 'green', 'color' : 'box-ligth-green', 'handle' : null, 'status': false},
    {'id': 'purpura', 'color' : 'box-ligth-purpura', 'handle' : null, 'status': false}
  ]
  const handleActiveLigth = (e) => {
      const element = e.target;
      setLightSelection(element.id);
  }

  return (
    <section>
        <div className='box-trafic-control'>
          {ligthGroup.map((item)=> <Ligth id={item.id} color={item.color} handle={handleActiveLigth} selection={ligthSelection}/>)}
        </div>
    </section>
  )
}

export default App
