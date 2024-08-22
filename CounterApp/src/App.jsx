import { useState } from "react";

function App() {
    const [counter, setcounter] = useState(0);

    const increment = () => {
        setcounter(counter + 1);
        // setcounter(counter + 1);
        // setcounter(counter + 1);

        /*
          If you want to update a counter multiple times in a React component, you can achieve this by using a callback function.
          This function takes the previous value of the counter and allows you to update it multiple times within a single batch.
        */

        // setcounter((prevCounter) => prevCounter + 1);
        // setcounter((prevCounter) => prevCounter + 1);
        // setcounter((prevCounter) => prevCounter + 1);

        /*
          This behavior is made possible by React's use of a mechanism called "React Fiber."
          When you use useState or make other updates in your component, React batches these updates together.
          If it detects that multiple updates are attempting to make the same change, it optimizes and only updates the user interface or variable once for efficiency.

          In simpler terms, React groups similar updates together and performs them in a more efficient manner, ensuring that your component's state is updated as expected,
          but without unnecessary redundancy. This helps improve the performance and responsiveness of your React application.
        */
    };

    const decrement = () => {
        if (counter > 0) setcounter(counter - 1);
    };

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment} value="increment">
                Increment
            </button>
            <button onClick={decrement} value="decrement">
                Decrement
            </button>
        </>
    );
}

export default App;
