import axios from "axios";

const config = {
    baseURL: '/api'
}

const instance = axios.create(config);

export const getJson = instance.get;

export const postJson = instance.post;
