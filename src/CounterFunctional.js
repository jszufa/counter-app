import React, { useState } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';


const CounterFunctional = (props) => {

    const [counterValue, setCounterValue] = useState(props.initValue);
    const [showClock, setShowClock] = useState(true);
    const [step, setStep] = useState(props.initStep);


    const changeValue = (action) => {

        setCounterValue(() => {

            let currentCounterValue = counterValue;

            if (action === 'add') {
                currentCounterValue += step;
            }

            else if (action === 'reinit') {
                currentCounterValue = props.initValue;

            } else {
                currentCounterValue = 0;
            }

            return (
                currentCounterValue
            )
        }

        )
    }

    const toggleClock = () => {

        setShowClock(!showClock);
    }

    const updateStep = (stepValue) => {

        setStep(Number(stepValue));
    }


    let clockElement = '';
    if (showClock) {
        // clockElement = <Clock  toggleClockMethod={this.toggleClock} />;
        clockElement = <ClockFunctional toggleClockMethod={toggleClock} />;
    } else {
        clockElement = <span className="show-clock" onClick={toggleClock}>show clock</span>;
    }

    return (
        <div className='counter'>
            Counter:
            <Display displayValue={counterValue} />
            <ButtonsPanel buttonMethod={changeValue} stepValue={step} />
            Step:
            <Step inputUpdateStepMethod={updateStep} stepValue={step} />
            {clockElement}
        </div>
    )
}

export default CounterFunctional;