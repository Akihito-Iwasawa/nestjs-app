import { Injectable } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { RoleRepository } from './role.repository';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async index(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async show(id: number): Promise<Role> {
    return await this.roleRepository.findOne(id);
  }

  async create(role: CreateRoleDto): Promise<Role> {
    const { name, createdAt, updatedAt } = role;
    const row = this.roleRepository.create({
      name,
      createdAt,
      updatedAt,
    });
    return await this.roleRepository.save(row);
  }

  async update(id: number, updateName: string): Promise<Role> {
    const found = await this.roleRepository.findOne(id);
    if (!found) {
      return new Role();
    }
    const now = new Date();
    found.name = updateName;
    found.updatedAt = now;
    return await this.roleRepository.save(found);
  }

  async delete(id: number): Promise<void> {
    const found = await this.roleRepository.findOne(id);
    if (found) {
      await this.roleRepository.delete(found);
    }
  }
}
