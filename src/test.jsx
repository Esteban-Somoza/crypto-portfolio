import {useState} from 'react';

function Child({handleClick}) {
  return (
    <div>
      <button onClick={event => handleClick(event, 100)}>
        Click
      </button>
    </div>
  );
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = (event, num) => {
    console.log(event.target);

    setCount(current => current + num);
  };

  return (
    <div>
      <Child handleClick={handleClick} />

      <h2>Count: {count}</h2>
    </div>
  );
}