import { CreateSoldDto } from "../dto/create-sold.dto";
import { Sold } from "../entities/sold.entity";

export abstract class SoldsRepository{
    abstract create(data: CreateSoldDto, ad_id:string, user_id: string): Promise<Sold> | Sold
    abstract findAll(): Promise<Sold[]> | Sold[]
    abstract findOne(id: string): Promise<Sold> | undefined | Sold
    abstract delete(id: string): Promise<void> | void
}