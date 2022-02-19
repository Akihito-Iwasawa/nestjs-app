import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from '../entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async index(): Promise<Role[]> {
    return await this.rolesService.index();
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Role> {
    return await this.rolesService.show(id);
  }

  @Post()
  async create(@Body() role: CreateRoleDto): Promise<Role> {
    const now = new Date();
    role.createdAt = now;
    role.updatedAt = now;
    return this.rolesService.create(role);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<Role> {
    return this.rolesService.update(id, name);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.rolesService.delete(id);
  }
}
