import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';

//STEP - notatki
//wartość kroku jest podana przez użytkownika w Step -> funkcja zwrotna -> do countera (state)
//z counter wartość ta jest przekazywana do Buttons Panel (propsem)
//w samym counter jest wykorzystywana w funkcjichangeValue


class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            step: this.props.initStep,

        };

    }

    changeValue = (action) => {

        this.setState ((prevState, prevProps) => {
            
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.step;
            }
    
            else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
    
            } else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            }
            )
        }

        )
    }

    toggleClock = () => {
        
        this.setState((prevState) => {
            return ({showClock: !prevState.showClock});
        })
    }

    updateStep = (stepValue) => {

        //tutaj nie potrzebuję użyć prevState, bo nie obliczam wartości stepValue na podstawie aktualnego stanu w tym komponencie, prawda?
        this.setState(() => {
            
            return({step: Number(stepValue)});
        })
    }


    render() {

        //let randomNumber = Math.floor(Math.random() * 108 + 1);
        let clockElement = '';
        if (this.state.showClock) {
            // clockElement = <Clock  toggleClockMethod={this.toggleClock} />;
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span className="show-clock" onClick={this.toggleClock}>show clock</span>;
        }

        return (
            <div className='counter'>
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.step} />
                Step:
                <Step inputUpdateStepMethod={this.updateStep} stepValue={this.state.step}/>
                {clockElement}
            </div>
        )
    }
}

// KOMPONENT FUNKCYJNY
// function Counter (props) {

// let randomNumber = Math.floor(Math.random() * 108 + 1);

//     return (
// <div className='counter'>
//     Counter:
//     <span className="value"> 
//         {randomNumber}
//     </span>
// </div>
//     );
// }

export default Counter;