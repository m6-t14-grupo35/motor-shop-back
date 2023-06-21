import { randomUUID } from "crypto"

export class Image {
    readonly id: string
    cover: string
    image_1: string
    image_2: string
    image_3: string
    image_4: string
    image_5: string
    ad_id: string
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
