import { Suspense } from 'react'
import Spinner from '../Loaders/Spinner/Spinner'

const Suspenser = ({ component }) => {
    return (
        <Suspense fallback={<Spinner />}>
            <h2>Preview</h2>
            {component}
        </Suspense>
    )
}

export default Suspenser