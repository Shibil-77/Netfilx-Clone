import axios from "axios";
import {baseUrl} from './comstants/constants'


const instance = axios.create({
    baseURL:baseUrl,
  });

export default instance