import PretalxClient from './PretalxClient';

const baseUrl = 'https://pretalx.com/api';
const eventName = 'democon';
const invalidEvent = '0xInvalidEvent';

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
