import { test, expect, APIResponse } from '@playwright/test';
import { BASE_URL } from './constant/config';

test('Verify headers in API response', async ({ request }) => {
  const response: APIResponse = await request.get(BASE_URL);
  const headers = response.headers();

  expect(response.status()).toBe(200);
  expect(headers).toHaveProperty('date');
  expect(headers['content-type']).toBe('application/json; charset=utf-8');
});
