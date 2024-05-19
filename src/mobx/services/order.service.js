import { host } from '../host.constant'
import axios from "axios";

class OrderService {

    createOrder = async (order) => {
        return axios.post(`${host}/order/create`, order)
    }
}

export default OrderService