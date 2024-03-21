import axios from 'axios';

describe('GET /api', () => {
  it('should return a message', async () => {
    // Spécifiez l'URL complète avec le port 3333
    const res = await axios.get(`http://localhost:3333/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});
