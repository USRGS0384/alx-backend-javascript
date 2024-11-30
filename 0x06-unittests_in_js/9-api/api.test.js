import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './api.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('API Integration Tests', () => {
  describe('GET /', () => {
    it('should return status 200 and welcome message', async () => {
      const res = await chai.request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Welcome to the payment system');
    });
  });

  describe('GET /cart/:id', () => {
    it('should return status 200 when :id is a number', async () => {
      const res = await chai.request(app).get('/cart/12');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Payment methods for cart 12');
    });

    it('should return status 404 when :id is not a number', async () => {
      const res = await chai.request(app).get('/cart/hello');
      expect(res.status).to.equal(404);
    });
  });
});
