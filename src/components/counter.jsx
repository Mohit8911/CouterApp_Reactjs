import React from 'react'

const Counter = ({counter,onIncrement,onDelete,onDecrement}) => {

    function getBadgeClasses() {
        let classes="btn btn-md m-2 btn-";
        classes+= counter.value === 0 ? "warning": "primary";
        return classes;
    }

    function formatCount(){
        return counter.value ===0 ? "Zero" : counter.value;
    }

    return ( 
            <div className="row">
                <div className="col-2">
                <span className={getBadgeClasses()}>{formatCount()}</span>
                </div>
                <div className="col">
                <button className="btn btn-secondary btn-lg " onClick={() => onIncrement(counter)}>
                +
            </button>
            <button className="btn btn-secondary btn-lg m-2" onClick={() => onDecrement(counter)} disabled={counter.value ===0? "disabled": ""}>
                -
            </button>
            <button className="btn btn-danger btn-lg " onClick={() => onDelete(counter._id)}>
                Delete
            </button>
                </div>
            </div>
    );
}
 
export default Counter;