export interface ITime {
    hours: number
    minutes: number
    seconds: number
}

export interface IPermission {
    way: 'walk' | 'car'
    dateFrom: string
    timeFrom: ITime
    dateTo: string
    timeTo: ITime
    purpose: string
    hasWeapon: boolean
    comment: string
}
