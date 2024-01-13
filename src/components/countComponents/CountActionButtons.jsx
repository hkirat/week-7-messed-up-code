import { useContext } from 'react'
import { CounterContext } from '../../context/counter'

const CountActionButtons = () => {
    const { count, setCount } = useContext(CounterContext)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count <= 0 ? 0 : count - 1)
    }

    return <div>
        <button className='cursor-pointer' onClick={handleIncrement}>Increase</button>

        <button className='cursor-pointer' onClick={handleDecrement} disabled={count === 0}>Decrease</button>
    </div>
}

export default CountActionButtons