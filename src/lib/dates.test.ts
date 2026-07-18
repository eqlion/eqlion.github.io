import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { formatMonth } from './dates.ts';

describe('date formatting', () => {
    it('formats stored months for display', () => {
        assert.equal(formatMonth('2021-07'), '07, 2021');
    });
});
