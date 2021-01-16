import axios from "axios";
import { CombustivelPayload } from "./api/combustivel/types";
const API_URL = 'https://combustivelapp.herokuapp.com';

export function fetchOrders(){
    return axios(`${API_URL}/api/combustivel`);
    
}