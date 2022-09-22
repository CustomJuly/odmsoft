import type {IPermission} from "@/types/permission";
import {ref} from "vue";

const createNewPermission = (): IPermission => ({
    way: 'walk',
    dateFrom: '',
    timeFrom: {
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    dateTo: '',
    timeTo: {
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    purpose: '',
    hasWeapon: false,
    comment: ''
})

const permissions = ref<IPermission[]>([
    createNewPermission()
])

export const usePermission = () => {
    const create = () => {
        permissions.value.push(createNewPermission())
    }

    return { create, permissions }
}
