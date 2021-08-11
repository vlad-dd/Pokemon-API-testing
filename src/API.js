import axios from 'axios';

export const PokemonAPI = {
    getVillages() {
        return (axios.get('https://610bf14866dd8f0017b76ba0.mockapi.io/villages'))
    },

    getPokemons(currentPageUrl) {
        return (axios.get(currentPageUrl))
    },

    getAllPokemonInfo(name) {
        return (axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`))
    },

    getAboutInfo(id) {
        return (axios.get(`https://610bf14866dd8f0017b76ba0.mockapi.io/types/${id}`))
    },

    setLoginData(login, password, rememberMe) {
        return (axios.post('https://610bf14866dd8f0017b76ba0.mockapi.io/login', {login:login, password:password, rememberMe:rememberMe } ))
    },

    setMyPokemons(data) {
        return (axios.post('https://610bf14866dd8f0017b76ba0.mockapi.io/mypokemons', {id:data.id, name:data.name, url:data.url}))
    },

    getAddedPokemons() {
        return (axios.get('https://610bf14866dd8f0017b76ba0.mockapi.io/mypokemons'))
    },

    deleteAddedPokemons(id) {
        return (axios.delete(`https://610bf14866dd8f0017b76ba0.mockapi.io/mypokemons/${id}`))
    }
}
