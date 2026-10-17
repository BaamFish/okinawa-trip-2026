import test from 'node:test';
import assert from 'node:assert/strict';
import {countdown} from '../src/countdown.js';
test('倒數以台北日曆為準且旅行結束不出現負數',()=>{
 assert.equal(countdown(new Date('2026-10-18T12:00:00+08:00')).value,68);
 assert.equal(countdown(new Date('2026-12-24T15:59:00Z')).value,1);
 assert.equal(countdown(new Date('2026-12-24T16:00:00Z')).value,'旅途中');
 assert.equal(countdown(new Date('2026-12-28T23:59:00+08:00')).value,'旅途中');
 assert.equal(countdown(new Date('2026-12-29T00:00:00+08:00')).value,'已珍藏');
});
