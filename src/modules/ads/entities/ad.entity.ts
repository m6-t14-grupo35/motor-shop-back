import { Decimal } from "@prisma/client/runtime"
import { randomUUID } from "crypto"

/* export enum FuelTypes {
    Gasolina,
    Etanol,
    Diesel,
    GLP,
    Hybrid,
    Electric
} */

export class Ad {
    readonly id: string
    brand: string
    model: string
    year: string
    fuel: string
    km: number
    color: string
    price: number
    description: string
    is_sold: boolean
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
