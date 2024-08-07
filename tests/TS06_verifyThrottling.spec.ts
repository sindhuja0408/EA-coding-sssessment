import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import { BASE_URL } from './constant/config';

test('Simulate API throttling', async ({ request }) => {
  const requestCount = 10; // Number of requests to send
  const responses = await throttleRequests(request, requestCount);

  // Check that all responses are received
  expect(responses.length).toBe(requestCount);

  // Verify the responses to check if throttling is applied
  const throottleResponse = responses.filter((response) => response.status() === 429);
  expect(throottleResponse.length).toBeGreaterThan(0);
});

// Function to send multiple requests in a short period
async function throttleRequests(request: APIRequestContext, count: number) {
  const promises: Promise<APIResponse>[] = [];
  for (let i = 0; i < count; i++) {
    promises.push(request.get(BASE_URL));
  }
  return Promise.all(promises);
}
