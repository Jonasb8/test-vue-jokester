import * as types from './mutation-types'

export const initActions = ({ commit }) => {
    console.log(types.INIT_JOKES);
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(resp => resp.json())
    .then(json => {
        commit(types.INIT_JOKES, json)
    })
}

export const addJoke = ({ commit }) => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(resp => resp.json())
    .then(json => {
        commit(types.ADD_JOKE, json)
    })
}

export const deleteJoke = ({ commit }, index) => {
    commit(types.DELETE_JOKE, index)
}
