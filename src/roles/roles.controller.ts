import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from '../entities/role.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async index(): Promise<Role[]> {
    return await this.rolesService.index();
  }

  // @Get(':id')
  // show(@Param('id') id: number): Promise<Role> {
  //   return this.rolesService.show(id);
  // }
  @Get(':id')
  show() {
    return this.rolesService.show();
  }

  @Post()
  create() {
    return this.rolesService.create();
  }

  @Patch(':id')
  update(/*@Param('id') id: string*/) {
    return this.rolesService.update();
  }

  @Delete(':id')
  delete(/*@Param('id') id: string*/) {
    return this.rolesService.delete();
  }
}
