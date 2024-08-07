import { test, expect, APIResponse } from '@playwright/test';
import { BASE_URL } from './constant/config';

test('Verify resposne status of an API request', async ({ request }) => {
  try {
    const response: APIResponse = await request.get(BASE_URL);
    expect(response.status()).toBe(200);
  } catch (error) {
    console.log('Error occurred:', error);
  }
});
