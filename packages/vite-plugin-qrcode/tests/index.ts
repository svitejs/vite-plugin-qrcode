import { test } from 'uvu';
import { equal } from 'uvu/assert';
import { code } from '../src/index';

test('code', () => {
	equal(code, '');
});

test.run();
