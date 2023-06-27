import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressesRepository } from './repositories/addresses.repository';

@Injectable()
export class AddressesService {
  constructor(private addressesRepository: AddressesRepository) {}
  async create(createAddressDto: CreateAddressDto, user_id: string) {
    return await this.addressesRepository.create(createAddressDto, user_id);
  }

  async findAll() {
    return await this.addressesRepository.findAll();
  }

  async findOne(id: string) {
    const address = await this.addressesRepository.findOne(id);
    if (!address) {
      throw new NotFoundException('Address not found.');
    }
    return address;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const address = await this.addressesRepository.findOne(id);
    if (!address) {
      throw new NotFoundException('Address not found.');
    }
    return await this.addressesRepository.update(id, updateAddressDto);
  }

  async remove(id: string) {
    const address = await this.addressesRepository.findOne(id);
    if (!address) {
      throw new NotFoundException('Address not found.');
    }
    return await this.addressesRepository.delete(id);
  }
}
