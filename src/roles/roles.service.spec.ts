import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { RoleRepository } from './role.repository';
import { CreateRoleDto } from './dto/create-role.dto';

const now = new Date();
const mockRepositoryParams: any = {
  id: 1,
  name: 'admin',
  createdAt: now,
  updatedAt: now,
};

const mockRepository = () => ({
  find: jest.fn().mockResolvedValue([]),
  create: jest.fn(),
  save: jest.fn().mockResolvedValue(mockRepositoryParams),
  findOne: jest.fn().mockResolvedValue(mockRepositoryParams),
  delete: jest.fn(),
});

describe('RolesServiceTest', () => {
  let service: RolesService;
  let repository: RoleRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesService,
        {
          provide: RoleRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get<RolesService>(RolesService);
    repository = module.get<RoleRepository>(RoleRepository);
  });

  describe('index', () => {
    it('正常系', async () => {
      const expected = [];
      const result = await service.index();
      expect(result).toEqual(expected);
    });
  });

  describe('show', () => {
    it('正常系', async () => {
      const expected = {
        id: 1,
        name: 'admin',
        createdAt: now,
        updatedAt: now,
      };
      const result = await service.show(1);
      expect(result).toEqual(expected);
    });
  });

  describe('create', () => {
    it('正常系', async () => {
      const expected = {
        id: 1,
        name: 'admin',
        createdAt: now,
        updatedAt: now,
      };

      const result = await service.create(mockRepositoryParams);
      expect(result).toEqual(expected);
    });
  });

  describe('update', () => {
    it('正常系', async () => {
      const updatedAt = new Date();
      const expected = {
        id: 1,
        name: 'member',
        createdAt: now,
        updatedAt: updatedAt,
      };

      const result = await service.show(1);
      result.name = 'member';
      result.updatedAt = updatedAt;

      expect(result).toEqual(expected);
    });
  });

  describe('delete', () => {
    it('正常系', async () => {
      await service.delete(1);
      expect(repository.delete).toHaveBeenCalled();
    });
  });
});
