import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { RoleRepository } from './role.repository';

const mockRepository = () => ({
  find: jest.fn().mockResolvedValue([]),
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
      // test suite
    });
  });

  describe('create', () => {
    it('正常系', async () => {
      // test suite
    });
  });

  describe('update', () => {
    it('正常系', async () => {
      // test suite
    });
  });

  describe('delete', () => {
    it('正常系', async () => {
      // test suite
    });
  });
});
