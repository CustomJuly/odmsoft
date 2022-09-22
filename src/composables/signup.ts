import {ref} from "vue";
import router from "@/router";
import {useAuth} from "@/composables/auth";
import {usePermission} from "@/composables/permission";
import type {IUser} from "@/types/user";
const currentStep = ref<number>(1);

export const useSignUp = () => {
    const { user, saveStorage } = useAuth()
    const { permissions } = usePermission()

    const goPrevious = () => {
        if (currentStep.value === 2) {
            currentStep.value--
        } else {
            router.push('/login')
        }
    }

    const goNext = () => {
        if (currentStep.value === 1) {
            currentStep.value++
        } else {
            if (!user.value) {
                return
            }
            user.value.permissions = permissions.value
            saveStorage()
            permissions.value = []
            router.push('/')
        }
    }
    return {
        currentStep,
        goPrevious,
        goNext
    }
}
