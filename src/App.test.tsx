import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import { App } from './App';

it('App', () => {
  expect(TestUtils.isElement(
    <App/>
  )).toBeTruthy()
})