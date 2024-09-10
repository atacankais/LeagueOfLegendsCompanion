import React, {useState} from 'react';

function App() {

/* You Variables*/
const [youClass, setYouClass] = useState('');  
const [youRune, setYouRune] = useState('');  
const [youIgnite, setYouIgnite] = useState('');  

/* const [lane, setLane] = useState('');  */ /* Lane */

/* Enemy Variables*/
const [enemyClass, setEnemyClass] = useState('');  
const [enemyRune, setEnemyRune] = useState('');  
const [enemyIgnite, setEnemyIgnite] = useState('');  

/* Your Lane Functions 
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
} */

/* Your Class Functions */
const youMeleeButton = () => {  
  setYouClass('Melee');
}

const youRangedButton = () => { 
  setYouClass('Ranged');
}

/* Your Runes Functions*/ 
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
  setYouRune('Arcane Comet');
}

const youRuneSummonAery = () => { 
  setYouRune('Summon Aery');
}

const youRuneFirstStrike = () => { 
  setYouRune('First Strike');
}

/* Your Ignite Functions*/ 
const youIgniteYesButton = () => { 
  setYouIgnite('Yes');
}

const youIgniteNoButton = () => { 
  setYouIgnite('No');
}

/* Enemy Class Functions*/
const enemyMeleeButton = () => {  
  setEnemyClass('Melee');
}

const enemyRangedButton = () => { 
  setEnemyClass('Ranged(Poke)');
}

/* Enemy Runes Functions */
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

/* Enemy Ignite Functions */
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
      {/* <h2>Which lane are you playing?</h2> 
      <button onClick={youTopButton}>Top</button>
      <button onClick={youJungleButton}>Jungle</button>
      <button onClick={youMidButton}>Mid</button>
      <button onClick={youAdcButton}>ADC</button>
      <button onClick={youSupportButton}>Support</button> */}

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

      <h2>Do you have ignite?</h2>
      <button onClick={youIgniteYesButton}>Yes</button>
      <button onClick={youIgniteNoButton}>No</button>

      <h1>Enemy</h1>
      <h2>Is your enemy Melee or Ranged(Poke)?</h2>
      <button onClick={enemyMeleeButton}>Melee</button>
      <button onClick={enemyRangedButton}>Ranged(Poke)</button>

      <h2>What runestone is your enemy playing?</h2>
      <button onClick={enemyRunePTA}>Press the Attack</button>
      <button onClick={enemyRuneConqueror}>Conqueror</button>
      <button onClick={enemyRuneElectrocute}>Electrocute</button>
      <button onClick={enemyRuneArcaneComet}>Arcane Comet</button>
      <button onClick={enemyRuneSummonAery}>Summon Aery</button>
      <button onClick={enemyRuneFirstStrike}>First Strike</button>

      <h2>Does your enemy have ignite?</h2>
      <button onClick={enemyIgniteYesButton}>Yes</button>
      <button onClick={enemyIgniteNoButton}>No</button>
      
      <h1>Matchup</h1>
      <p><b>You are:</b> {youClass} </p>
      <p><b>Your runestone:</b> {youRune}</p>
      <p><b>You have ignite:</b> {youIgnite}</p>
      {/* <p>Your lane: {lane}</p> */}
      <br/>
      <p><b>Enemy is:</b> {enemyClass} </p>
      <p><b>Enemy runestone:</b> {enemyRune}</p>
      <p><b>Enemy has ignite:</b> {enemyIgnite}</p>

    </div>
  );
}

export default App;
