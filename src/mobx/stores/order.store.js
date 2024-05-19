import { makeAutoObservable } from 'mobx'
import OrderService from "../services/order.service";

class OrderStore {

    orderService = new OrderService()

    constructor() {
        makeAutoObservable(this)
    }

    createOrder = async (order) => {
        await this.orderService.createOrder(order)
    }

}

export default new OrderStore()