import { makeAutoObservable } from 'mobx'
import UserService from '../services/user.service'

class UserStore {

    user = null
    userLoad =  false
    userService = new UserService()
    isAdmin = false

    constructor() {
        makeAutoObservable(this)
        this.refresh()
    }

    createUser = async (user) => {
        await this.userService.regUser(user)
    }

    getAdminValue = () => {
        return this.isAdmin
    }

    setAdminValue = () => {
        this.isAdmin = this.user?.role === 'admin'
    }

    login = async (user) => {
        const res = await this.userService.login(user)
        this.user = res.data
        this.setAdminValue()
    }

    logout = async () => {
        await this.userService.logout()
        this.user = null
        this.isAdmin = false
    }

    refresh = async () => {
        this.userLoad = false
        const res = await this.userService.refresh()
        if (res.data)
            this.user = res.data
        this.setAdminValue()
        this.userLoad = true
    }
}

export default new UserStore()