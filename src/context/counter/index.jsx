import { createContext, useReducer } from 'react'

const initialState = { count: 0 }
function reducer(state, action) {
    switch (action.type) {
        case 'SET_COUNTER':
            return { ...state, count: action.payload }
        default:
            throw new Error("Bad Action Type");
    }
}

export const CounterContext = createContext(initialState);


export const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setCount = (count) => {
        dispatch({ type: 'SET_COUNTER', payload: count })
    }

    return (
        <CounterContext.Provider value={{ ...state, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}