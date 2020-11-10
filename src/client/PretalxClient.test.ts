import PretalxClient from './PretalxClient';

const baseUrl = 'https://pretalx.com/api';
const invalidToken = '0xInvalidAccessToken';

describe('PretalxClient Init', () => {
  test('should initialise with default baseUrl', async () => {
    const client = new PretalxClient(baseUrl);

    expect(client).toBeDefined();
  });

  test('should initialise with default baseUrl and trailing slash', async () => {
    const client = new PretalxClient(baseUrl + '/');

    expect(client).toBeDefined();
  });

  test('should initialise with accesstoken', async () => {
    const client = new PretalxClient(baseUrl, invalidToken);

    expect(client).toBeDefined();
  });

  test('should throw with empty baseUrl', async () => {
    expect(() => new PretalxClient('')).toThrow('baseUrl is required');
  });
});
