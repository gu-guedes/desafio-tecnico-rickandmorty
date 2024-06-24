import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page, name) => {
  try {
    let url = `${API_URL}/character/?page=${page}`
    if(name){
        url += `&name=${name}`
    }
    const response = await axios.get(url);
    return {
        results: response.data.results,
        info: response.data.info
    } ;
  } catch (error) {
    console.error('Error getting characters:', error);
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting character by id:', error);
    throw error;
  }
};
