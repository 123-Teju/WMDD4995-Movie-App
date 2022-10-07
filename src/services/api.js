import { BASE_URL, API_KEY } from "../config/api_config";

export const getMediaList = async (type,sort, page) => {
    try {
        const url = `${BASE_URL}/${type}/${sort}?api_key=${API_KEY}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const getDetails = async (type, id) => {
    try {
        const url = `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const getSearchResults = async (type,query) => {
    try {
        const url = `${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`;
        const response = await fetch(encodeURI(url));
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}