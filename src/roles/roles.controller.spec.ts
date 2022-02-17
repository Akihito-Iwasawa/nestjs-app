import { Test, TestingModule } from '@nestjs/testing';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { RoleRepository } from './role.repository';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

const mockRepository = () => ({
  find: jest.fn(),
});

describe('RolesController', () => {
  let controller: RolesController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesController],
      providers: [
        RolesService,
        {
          provide: RoleRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    controller = module.get<RolesController>(RolesController);
    await app.init();
  });

  it('index:正常系 GET /roles が200レスポンスである', async () => {
    const response = await request(app.getHttpServer()).get('/roles');
    expect(controller).toBeDefined();
    expect(response.status).toBe(200);
  });

  it('show:正常系 GET /roles/:id が200レスポンスである', async () => {
    const response = await request(app.getHttpServer()).get('/roles/1');
    expect(controller).toBeDefined();
    expect(response.status).toBe(200);
  });

  it('create:正常系 POST /roles が201レスポンスである', async () => {
    const response = await request(app.getHttpServer()).post('/roles');
    expect(controller).toBeDefined();
    expect(response.status).toBe(201);
  });

  it('update:正常系 PATCH /roles/:id が200レスポンスである', async () => {
    const response = await request(app.getHttpServer()).patch('/roles/1');
    expect(controller).toBeDefined();
    expect(response.status).toBe(200);
  });

  it('delete:正常系 DELETE /roles/:id が200レスポンスである', async () => {
    const response = await request(app.getHttpServer()).delete('/roles/1');
    expect(controller).toBeDefined();
    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
