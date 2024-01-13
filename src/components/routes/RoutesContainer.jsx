import { Route, Routes } from 'react-router-dom'
import Landing from '../../pages/About'
import Home from '../../pages/Home'
import CounterPage from '../../pages/CounterPage'

const RoutesContainer = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/about" element={<Landing />} />
        </Routes>
    )
}

export default RoutesContainer