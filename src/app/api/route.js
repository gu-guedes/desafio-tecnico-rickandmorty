import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/character?page=${page}`);
    return response.data.results;
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
