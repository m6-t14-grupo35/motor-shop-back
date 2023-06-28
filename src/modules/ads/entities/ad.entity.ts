import { randomUUID } from "crypto"

 export enum FuelTypes {
    Gasolina,
    Etanol,
    Diesel,
    GLP,
    Hybrid,
    Electric
} 

export class Ad {
    readonly id: string
    brand: string
    model: string
    year: number
    fuel: string //FuelTypes
    km: number
    color: string
    price: number
    priceFIPE: number
    description: string
    is_sold: boolean = false
    user_id: string
    created_at: Date
    //updated_at: Date
    //deleted_at: Date

    constructor(){
        this.id = randomUUID()
        this.created_at = new Date()
        //this.updated_at = null
        //this.deleted_at = null
    }
}
