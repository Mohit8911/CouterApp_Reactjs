import React from 'react';
import Counter from './counter'

const Counters = props => {
    return ( 
        <div>
            <button className="btn btn-primary m-2" onClick={props.onReset}>
            Reset
            </button>
            {props.counters.map(counter =>(
                <Counter 
                key={counter.id}
                onDelete={props.onDelete}
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
                counter={counter}
                />
            ))}
        </div>
     );
};
 
export default Counters;