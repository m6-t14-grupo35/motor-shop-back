import { randomUUID } from "crypto"

export class Address {
    readonly id: string
    zip_code: string
    state: string
    city: string
    street: string
    number: number
    complement: string
    user_id: string
    created_at: Date
    //updated_at: Date
    //deleted_at: Date

    constructor(){
        this.id = randomUUID()
        this.created_at = new Date()
        //this.updated_at = null
        //this.deleted_at = null}
    }
}
