import { test, expect, APIResponse } from '@playwright/test';
import { BASE_URL } from './constant/config';
import { Festival, Band } from './constant/interfaces.ts';

test('Verify response data structure recursively', async ({ request }) => {
  const response: APIResponse = await request.get(BASE_URL);
  expect(response.status()).toBe(200);

  const festivals: Festival[] = await response.json();
  expect(festivals.length).toBeGreaterThan(0);
  expect(festivals).toBeInstanceOf(Array);

  festivals.forEach((festival: Festival) => {
    verifyFestival(festival);
    verifyBands(festival.bands);
  });
});

function verifyFestival(festival: Festival) {
  expect(festival).toHaveProperty('name');
  expect(festival).toHaveProperty('bands');
}

function verifyBands(bands: Band[]) {
  expect(bands.length).toBeGreaterThan(0);
  expect(bands).toBeInstanceOf(Array);

  bands.forEach((band) => {
    expect(band).toHaveProperty('name');
    expect(band).toHaveProperty('recordLabel');
  });
}
