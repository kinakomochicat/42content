import { useState } from 'react'; //useStateを使うためにインポート

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>現在の値: {count}</p>
        <button onClick={() => setCount(count + 1)}>
            +1する
        </button>
        </div>
    );
}

export default Counter;