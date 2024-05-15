import "./App.css";
import React, {  useState } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

const App = () => {
  const [countersArray, setCountersArray] = useState([
    { _id: 1, value: 0 },
    { _id: 2, value: 0 },
    { _id: 3, value: 0 },
    { _id: 4, value: 0 },
  ]);

   const handleReset = () => {
    const counters=[...countersArray];
     counters.forEach((counter) => { counter.value = 0 });
     console.log(counters);
    setCountersArray(counters)
  }

  const handleDelete = counterId => {
      const counters=countersArray.filter(c => c._id !== counterId);
      setCountersArray(counters)
      console.log(counterId);
  };

  const handleIncrement = counter => {
      const counters=[...countersArray];
      const index=counters.indexOf(counter);
      counters[index]= {...counter};
    counters[index].value++;
    console.log(counters);
    setCountersArray(counters);
  };

  const handleDecrement = counter => {
    const counters=[...countersArray];
    const index=counters.indexOf(counter);
    // counters[index]= {...counter};
    counters[index].value--;
    setCountersArray(counters)
  }

  return (
    <React.Fragment>
        <h1>Basic Counter Application</h1>
      <NavBar totalCounters={countersArray.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counters={countersArray}
        />
      </main>
    </React.Fragment>
  );
};

export default App;


