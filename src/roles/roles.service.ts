import { Injectable } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RolesService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async index(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  // async show(id: number): Promise<Role> {
  //   return await this.roleRepository.findOne(id);
  // }
  show() {
    return 'hoge';
  }

  create() {
    return 'service create';
  }

  update() {
    return 'service update';
  }

  delete() {
    return 'service delete';
  }
}
