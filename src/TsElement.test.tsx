import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import { TsElement } from './TsElement';

it('TsElement', () => {
  expect(TestUtils.isElement(
    <TsElement/>
  )).toBeTruthy()
})