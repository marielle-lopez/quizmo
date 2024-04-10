import { expect, test } from 'vitest';
import { convertHtmlEntities } from '../app/_lib/convert-html-entities';

test('convertHtmlEntities() given empty string', () => {
  const result = convertHtmlEntities('');
  expect(result).toStrictEqual('');
});

test('convertHtmlEntities() given string without HTML entities', () => {
  const result = convertHtmlEntities('Hello world!');
  expect(result).toStrictEqual('Hello world!');
});

test('convertHtmlEntities() given string with HTML entities', () => {
  const result = convertHtmlEntities(
    'If you are caught &quot;Goldbricking&quot;, what are you doing wrong?'
  );
  expect(result).toStrictEqual(
    'If you are caught "Goldbricking", what are you doing wrong?'
  );
});
