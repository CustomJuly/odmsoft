import type {IPermission} from "@/types/permission";

export interface IUser {
    email: string
    name: string
    surname: string
    cardId: string
    phone: string
    weapon: string
    car: string
    permissions: IPermission[]
}
