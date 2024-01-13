import { Suspense } from 'react'
import Spinner from '../Loaders/Spinner/Spinner'

const Suspenser = ({ component }) => {
    return (
        <Suspense fallback={<Spinner />}>
            {component}
        </Suspense>
    )
}

export default Suspenser