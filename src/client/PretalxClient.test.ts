import PretalxClient from './PretalxClient';

const baseUrl = 'https://pretalx.com/api';
const eventName = 'democon';
const invalidEvent = '0xInvalidEvent';
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

describe('Events', () => {
  test('should get pretalx events', async () => {
    const client = new PretalxClient(baseUrl);

    const response = await client.GetEvents();

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    expect(response.data?.length).toBeGreaterThan(1);
  });

  test('should get pretalx democon', async () => {
    const client = new PretalxClient(baseUrl);

    const response = await client.GetEvent(eventName);

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    expect(response.data?.slug).toBe(eventName);
  });

  test('should return 404 for unknown event', async () => {
    const client = new PretalxClient(baseUrl);

    const response = await client.GetEvent(invalidEvent);

    expect(response).toBeDefined();
    expect(response?.status).toBe(404);
  });
});
