const dataInicial = {
    boardNumbers: [],
    player1Number:{},
    player2Number:{},
}
const numbers = Array.from({length: 90}, (_, i) => i + 1)

function random() {
    return Math.floor(Math.random() * numbers.length) + 1
}

let count = 0;
while (count < 15) {
    // randomNum = random()
    // obj[randomNum] = randomNum;
    dataInicial.player1Number[random()] = 0
    dataInicial.player2Number[random()] = 0
    count++
}

// types
const start = 'start'

// reducer
function playersNumberReducer(state = dataInicial, action){
    console.log("action ", action)
    let reducer = {
        start: {
            ...state,
            boardNumbers: action.boardNumbers,
            player1Number : action.player1Number,
            player2Number : action.player2Number,
        },
    }
    return reducer[action.type] ? reducer[action.type] : state
}



// actions
export const getRandomNumber = () => async (dispatch, getState) => {
    console.log("state", getState())
    let number = random()

    while (getState().randomNumbers.boardNumbers.indexOf(number) >= 0) {
        number = random()
    }

    let player1 = getState().randomNumbers.player1Number
    let player2 = getState().randomNumbers.player2Number

    if(Object.keys(getState().randomNumbers.player1Number).includes(number)){
        player1[number] = number;
    }
    if(Object.keys(getState().randomNumbers.player2Number).includes(number)){
        player1[number] = number;

    }


    dispatch({
        type:start,
        boardNumbers: [...getState().randomNumbers.boardNumbers, number],
        player1Number:{...player1},
        player2Number:{...player2},

    })
}

export const obtenerPokemonsAction = (increment) => async (dispatch, getState) => {
    console.log("increment ", increment)
    console.log("pokemones ", getState().pokemones)
    let offset = getState().pokemones.offset + (increment ? increment : 0)
    console.log("offset ", offset)

    // try {
    //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    //     dispatch({
    //         // type: GET_POKE_SUCCESS,
    //         array:response.data.results,
    //         offset: offset

    //     })
    // } catch (error) {
    //     console.log(error)
    // }
}
export const obtenerPokemonsActionOffset = () => async (dispatch, getState) => {

    console.log(getState().pokemones.offset)
    // try {
    //     const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    //     dispatch({
    //         type: GET_POKE_SUCCESS,
    //         payload: response.data.results
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
}

const poke = {
    playersNumberReducer,
    random,
    getRandomNumber
}

export default poke;