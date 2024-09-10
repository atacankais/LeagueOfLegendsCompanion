import React, {useState} from 'react';

function App() {

/* You Variables*/
const [youClass, setYouClass] = useState('');  
const [lane, setLane] = useState('');  
const [youRune, setYouRune] = useState('');  

/* Enemy Variables*/
const [enemyClass, setEnemyClass] = useState('');  
const [enemyRune, setEnemyRune] = useState('');  
const [enemyIgnite, setEnemyIgnite] = useState('');  

/* Your lane */
const youTopButton = () => { 
  setLane('Top');
}

const youJungleButton = () => { 
  setLane('Jungle');
}

const youMidButton = () => { 
  setLane('Mid');
}

const youAdcButton = () => { 
  setLane('ADC');
}

const youSupportButton = () => { 
  setLane('Support');
}

/* Your class */
const youMeleeButton = () => {  
  setYouClass('Melee');
}

const youRangedButton = () => { 
  setYouClass('Ranged');
}

/* Your runes */ 
const youRunePTA = () => { 
  setYouRune('Press the Attack');
}

const youRuneConqueror = () => { 
  setYouRune('Conqueror');
}

const youRuneElectrocute = () => { 
  setYouRune('Electrocute');
}

const youRuneArcaneComet = () => {
  setYouRune('Arcane Cimet');
}

const youRuneSummonAery = () => { 
  setYouRune('Summon Aery');
}

const youRuneFirstStrike = () => { 
  setYouRune('First Strike');
}

/* Enemy Class */
const enemyMeleeButton = () => {  
  setEnemyClass('Melee');
}

const enemyRangedButton = () => { 
  setEnemyClass('Ranged');
}

/* Enemy Runes */
const enemyRunePTA = () => { 
  setEnemyRune('Press the Attack');
}

const enemyRuneConqueror = () => { 
  setEnemyRune('Conqueror');
}

const enemyRuneElectrocute = () => { 
  setEnemyRune('Electrocute');
}

const enemyRuneArcaneComet = () => { 
  setEnemyRune('Arcane Comet');
}

const enemyRuneSummonAery = () => { 
  setEnemyRune('Summon Aery');
}

const enemyRuneFirstStrike = () => { 
  setEnemyRune('First Strike');
}

/* Enemy ignite */
const enemyIgniteYesButton = () => { 
  setEnemyIgnite('Yes');
}

const enemyIgniteNoButton = () => { 
  setEnemyIgnite('No');
}

/* JSX */
  return (
    <div>
      <h1>You</h1> 
      <h2>Which lane are you playing?</h2>
      <button onClick={youTopButton}>Top</button>
      <button onClick={youJungleButton}>Jungle</button>
      <button onClick={youMidButton}>Mid</button>
      <button onClick={youAdcButton}>ADC</button>
      <button onClick={youSupportButton}>Support</button>

      <h2>Are you Melee or Ranged?</h2>
      <button onClick={youMeleeButton}>Melee</button>
      <button onClick={youRangedButton}>Ranged</button>

      <h2>Which runestone are you playing?</h2>
      <button onClick={youRunePTA}>Press the Attack</button>
      <button onClick={youRuneConqueror}>Conqueror</button>
      <button onClick={youRuneElectrocute}>Electrocute</button>
      <button onClick={youRuneArcaneComet}>Arcane Comet</button>
      <button onClick={youRuneSummonAery}>Summon Aery</button>
      <button onClick={youRuneFirstStrike}>First Strike</button>
      <h1>Enemy</h1>
      <h2>Is your enemy Melee or Ranged?</h2>
      <button onClick={enemyMeleeButton}>Melee</button>
      <button onClick={enemyRangedButton}>Ranged(Poke)</button>

      <h2>What runestone is your enemy playing?</h2>
      <button onClick={enemyMeleeButton}>Press the Attack</button>
      <button onClick={enemyRangedButton}>Conqueror</button>
      <button onClick={enemyRangedButton}>Electrocute</button>
      <button onClick={enemyRangedButton}>Arcane Comet</button>
      <button onClick={enemyRangedButton}>Summon Aery</button>
      <button onClick={enemyRangedButton}>First Strike</button>


      <h2>Does your enemy have ignite?</h2>
      <button onClick={enemyMeleeButton}>Yes</button>
      <button onClick={enemyRangedButton}>No</button>

      <p>You are: {youClass} </p>
      <p>Enemy is: {enemyClass} </p>

    </div>
  );
}

export default App;
