import { test } from 'uvu';
import { equal } from 'uvu/assert';
import { qrcode } from '../src/index';

test('code', () => {
	equal(typeof qrcode(), 'object');
});

test.run();
