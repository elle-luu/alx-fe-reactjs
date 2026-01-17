import { useState } from 'react';

const Counter = () => {
  // Initialize state
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        margin: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h2>Counter Application</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Current Count: {count}
      </p>
      <div>
        <button
          style={{ margin: '5px', padding: '10px 20px' }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{ margin: '5px', padding: '10px 20px' }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{ margin: '5px', padding: '10px 20px' }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
