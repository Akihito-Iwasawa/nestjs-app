import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { RoleRepository } from './role.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
