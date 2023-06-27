import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { AddressesRepository } from "../addresses.repository";
import { CreateAddressDto } from "../../dto/create-address.dto";
import { Address } from "../../entities/address.entity";
import { UpdateAddressDto } from "../../dto/update-address.dto";

@Injectable()
export class AddressesPrismaRepository implements AddressesRepository{
    constructor(private prisma: PrismaService) {}
    async create(data: CreateAddressDto, user_id: string): Promise<Address> {
      const address = new Address();
      Object.assign(address, {
        ...data,
        user_id: user_id,
      });

      const newAddress = await this.prisma.address.create({
          data: {
            ...address,
          },
        });
  
      return newAddress;
    }
    async findAll(): Promise<Address[]> {
      const addresses = await this.prisma.address.findMany();
      return addresses;
    }
   
    async findOne(id: string): Promise<Address> {
      const address = await this.prisma.address.findUnique({
        where: { id }
      });
      return address
    }
    async update(id: string, data: UpdateAddressDto): Promise<Address> {
      const address = this.prisma.address.update({
        where: { id },
        data: { ...data },
      });
      return address;
    }
    async delete(id: string): Promise<void> {
      await this.prisma.address.delete({
        where: { id },
      });
    }
}