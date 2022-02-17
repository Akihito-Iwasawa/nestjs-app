import { Injectable } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RolesService {
  constructor(private readonly roleRepository: RoleRepository) {}

  // async index(): Promise<Role[]> {
  //   return await this.roleRepository.find();
  // }
  index() {
    return 'service show';
  }

  show() {
    return 'service show';
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
