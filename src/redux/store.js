import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import generateNUmbers from './generateNumbers'

// console.log(pokeReducer)
 
const rootReducer = combineReducers({
    randomNumbers: generateNUmbers.playersNumberReducer,
    random: generateNUmbers.random
})
 
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}