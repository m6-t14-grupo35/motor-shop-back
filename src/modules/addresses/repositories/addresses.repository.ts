import { CreateAddressDto } from "../dto/create-address.dto";
import { UpdateAddressDto } from "../dto/update-address.dto";
import { Address } from "../entities/address.entity";

export abstract class AddressesRepository{
    abstract create(data: CreateAddressDto, user_id: string): Promise<Address> | Address
    abstract findAll(): Promise<Address[]> | Address[]
    abstract findOne(id: string): Promise<Address> | undefined | Address
    abstract update(id: string, data:UpdateAddressDto): Promise<Address> | Address
    abstract delete(id: string): Promise<void> | void
}