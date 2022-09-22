import {ref} from "vue";
import {generateVerificationCode} from "@/utils/random";
import router from "@/router";
import type {IUser} from "@/types/user";

const USERS_STORAGE_KEY = 'users'
const LOGGED_AS_KEY = 'logged_as'

const currentStep = ref<number>(1);
const email = ref<string>('')
const code = ref<string[]>(['', '', '', '', ''])
const generatedCode = ref<string>('')
const users = ref<IUser[]>([])
const user = ref<IUser | null>(null)

export const useAuth = () => {
    const goPrevious = () => {
        if (currentStep.value === 2) {
            currentStep.value--
        }
    }

    const goNext = () => {
        generatedCode.value = generateVerificationCode()
        console.log('your code is', generatedCode.value)

        if (currentStep.value === 1) {
            currentStep.value++
        }
    }

    const saveStorage = () => {
        window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users.value))
    }

    const setLoggedAs = () => {
        if (user.value) {
            window.localStorage.setItem(LOGGED_AS_KEY, JSON.stringify(user.value?.email))
        } else {
            window.localStorage.removeItem(LOGGED_AS_KEY)
        }
    }

    const logout = () => {
        router.push('/login')
        user.value = null
        setLoggedAs()
    }

    const createUser = (): IUser => ({
        email: email.value,
        name: '',
        surname: '',
        cardId: '',
        phone: '',
        weapon: '',
        car: '',
        permissions: []
    })

    const init = () => {
        const usersStr = window.localStorage.getItem(USERS_STORAGE_KEY)
        const loggedAsStr = window.localStorage.getItem(LOGGED_AS_KEY)
        if (!usersStr || !loggedAsStr) {
            return
        }
        const users: IUser[] = JSON.parse(usersStr)
        const loggedAs: string = JSON.parse(loggedAsStr)
        const existingUser = users.find(u => u.email === loggedAs)
        if (existingUser) {
            user.value = existingUser
        }
    }

    const resetAuthForm = () => {
        currentStep.value = 1
        email.value = ''
        code.value = ['', '', '', '', '']
    }

    const login = () => {
        const usersStr = window.localStorage.getItem(USERS_STORAGE_KEY)

        if (!usersStr) {
            const newUser = createUser()
            users.value.push(newUser)
            user.value = newUser
            saveStorage()
            setLoggedAs()
            console.log('empty storage; new user has been authorized')
            router.push({ path: '/signup' })
        } else {
            users.value = JSON.parse(usersStr)
            const existingUser = users.value.find(u => u.email === email.value)
            if (existingUser) {
                user.value = existingUser
                setLoggedAs()
                console.log('user exists and has been authorized')
                router.push('/')
            } else {
                const newUser = createUser()
                users.value.push(newUser)
                saveStorage()
                user.value = newUser
                setLoggedAs()
                console.log('user doesn\'t exist and has been authorized')
                router.push({ path: '/signup' })
            }
        }
    }

    const verify = () => {
        if (generatedCode.value === code.value.join('')) {
            login()
            resetAuthForm()
        } else {
            console.warn('code is incorrect')
        }
    }

    return {
        currentStep,
        email,
        code,
        user,
        init,
        goPrevious,
        goNext,
        verify,
        saveStorage,
        logout
    }
}
