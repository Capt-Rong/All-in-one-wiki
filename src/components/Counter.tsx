import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-md">
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
