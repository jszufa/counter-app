import React from 'react';
import './Step.css';

const Step = (props) => {

  let inputStep

  return (   
        
          <input ref={(data)=> {inputStep = data}} onChange={() => {props.inputUpdateStepMethod(inputStep.value)}} /* onChange={()=> {console.log()}} */ type="number" min="1"/>
        );

  }

export default Step;

    
    /*  atrybut ref tworzyu dosłownie referencję do elementu do którego jest wstawiany. Inaczej mówiąc w chwili gdy piszesz
<input ref={(data) => { this._inputStep = data} } type="number" /> 
 "data" oznacza dosłownie "input ze wszystkimi jego własciwościami" -> czyli przypisując data (nasz input) do zmiennej _inputStep jestes w stanie odwołac sie i uzyć gdzies np właściowosci "value" inputa, której własnie w tym zadaniu potrzebujesz 😉
oczywiście poprzez zmienną _inpuStep czyli ---> this._inputStep.value
    
    */


/*    
inne rozwiązanie

const inputRef = useRef();
 
    return (   
        
      <input ref={inputRef} onChange={() => {props.inputUpdateStepMethod(Number(inputRef.current.value))}}  type="number" min="1"/>
    
    ); */