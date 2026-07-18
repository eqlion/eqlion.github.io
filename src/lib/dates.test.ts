import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { formatDuration, formatMonth } from './dates.ts';

describe('date formatting', () => {
    it('formats stored months for display', () => {
        assert.equal(formatMonth('2021-07'), '07, 2021');
    });

    it('counts an inclusive single month', () => {
        assert.equal(formatDuration('2021-07', '2021-07'), '1 month');
    });

    it('counts a period shorter than one year', () => {
        assert.equal(formatDuration('2021-07', '2022-04'), '10 months');
    });

    it('counts years and remaining months', () => {
        assert.equal(formatDuration('2021-07', '2022-07'), '1 year, 1 month');
        assert.equal(formatDuration('2022-12', '2024-04'), '1 year, 5 months');
    });
});
