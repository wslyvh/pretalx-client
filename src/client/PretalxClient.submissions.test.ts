import PretalxClient from './PretalxClient';

const baseUrl = 'https://pretalx.com/api';
const eventName = 'democon';
const invalidEvent = '0xInvalidEvent';
const submissionCode = 'GHDULK';
const invalidSubmissionCode = '0xInvalidSubmissionCode';

describe('Submissions', () => {
  test('should get democon event submissions', async () => {
    const client = new PretalxClient(baseUrl);

    const response = await client.GetSubmissions(eventName);

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    expect(response.data?.count).toBeGreaterThan(1);
  });

  test('should return 404 for unknown event', async () => {
    const client = new PretalxClient(baseUrl);

    const response = await client.GetSubmissions(invalidEvent);

    expect(response).toBeDefined();
    expect(response?.status).toBe(404);
  });

  test('should get democon "GHDULK" event submission', async () => {
    const client = new PretalxClient(baseUrl);

    const response = await client.GetSubmission(eventName, submissionCode);

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    expect(response.data?.code).toBe(submissionCode);
  });

  test('should get return 404 for unknown event submission', async () => {
    const client = new PretalxClient(baseUrl);

    const response = await client.GetSubmission(eventName, invalidSubmissionCode);

    expect(response).toBeDefined();
    expect(response?.status).toBe(404);
  });
});
