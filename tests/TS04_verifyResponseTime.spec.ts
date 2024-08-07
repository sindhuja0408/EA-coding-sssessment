import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import { BASE_URL } from './constant/config';

test('Verify response time for an API request', async ({ request }) => {
  const maxExpectedResponseTime = 500;
  const { response, responseTime } = await measureResponseTime(request, BASE_URL);
  console.log('responseTime :>> ', responseTime);
  expect(response.status()).toBe(200);
  expect(responseTime).toBeLessThan(maxExpectedResponseTime);
});

interface measureResponseTimeResponse {
  response: APIResponse;
  responseTime: number;
}

async function measureResponseTime(request: APIRequestContext, url: string): Promise<measureResponseTimeResponse> {
  const startTime = Date.now();
  const response = await request.get(url);
  const endTime = Date.now();
  const responseTime = endTime - startTime;
  return { response, responseTime };
}
