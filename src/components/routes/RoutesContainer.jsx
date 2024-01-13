import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Suspenser from '../lazyLoading/Suspenser.jsx'
const CounterPage = lazy(() => import('../../pages/CounterPage.jsx'))
const About = lazy(() => import('../../pages/About.jsx'))

const RoutesContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Suspenser component={<CounterPage />} />} />
            <Route path="/about" element={<Suspenser component={<About />} />} />
        </Routes>
    )
}

export default RoutesContainer