import { test, expect } from '@playwright/test';

test('Hitting invalid URL returns 404', async ({ request }) => {
  const invalidUrl = 'https://eacp.energyaustralia.com.au/codingtest/api/v1/festival';
  const response = await request.get(invalidUrl);
  expect(response.status()).toBe(404);
});
