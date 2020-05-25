/* eslint-disable no-undef */
const supertest = require('supertest');
const mongoose = require('mongoose');
const server = require('./testServer');

const connectToDb = require('../modules/db/connect-db');
const { testDbUrl } = require('../../config');

let app;
let testFilm;

describe('Films endpoint', () => {
  beforeAll(async () => {
    await connectToDb(testDbUrl);
    app = server.listen(3002);
  });

  it('Should create a new film', async () => {
    const res = await supertest(app)
      .post('/films-add')
      .send({
        title: 'Test title',
        release_year: '1999',
        format: 'Blue Ray',
        cast: ['Test member', 'Test member 2'],
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    testFilm = res.body;
  });

  it('Should get film by id', async () => {
    const res = await supertest(app).get('/films-get-one').send({
      id: testFilm._id,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('Should update film', async () => {
    const res = await supertest(app)
      .post('/films-edit')
      .send({
        id: testFilm._id,
        title: 'Test title',
        release_year: '1999',
        format: 'Blue Ray',
        cast: ['Test member', 'Test member 2'],
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('Should delete film', async () => {
    const res = await supertest(app).post('/films-delete').send({
      id: testFilm._id,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('Should get all the films', async () => {
    const res = await supertest(app).get('/films').send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('Should get all films with actor parameter', async () => {
    const res = await supertest(app).get('/films-by-actor').send({
      actor: 'Test actor',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('Should accept a text file', async () => {
    const formData = new FormData();
    formData.append('file', testFile);
    const res = await supertest(app).get('/films-by-actor').send(testData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  afterAll(async (done) => {
    app.close();
    mongoose.disconnect();
    done();
  });
});
