import CountActionButtons from '../components/countComponents/CountActionButtons'
import CountRenderer from '../components/countComponents/CountRenderer'

const CounterPage = () => {
    return (
        <>
            <h1>Counter Page</h1>
            <CountRenderer />
            <CountActionButtons />
        </>
    )
}

export default CounterPage