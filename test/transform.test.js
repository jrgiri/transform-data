const request = require('supertest');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const app = require('../index');
const expect = chai.expect;
const Data = require('./input')

chai.use(chaiAsPromised);

describe('functional - transform data', () => {
  it('as expected output', async () => {
    const res = await request(app).post('/api/transform').send(Data.validInput);
    expect(res.status).to.equal(200);
  }).timeout(10000);

  it('as not expected output(Invalid input)', async () => {
    const res = await request(app).post('/api/transform').send(Data.invalidInput);
    expect(res.status).to.equal(400);
  }).timeout(10000);
});