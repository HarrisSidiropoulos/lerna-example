import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('@sidiropoulos/shared-components', () => ({
  TestComponent: 'TestComponent',
}));

test('renders learn react link', () => {
  const app = renderer.create(<App />).toJSON();

  expect(app).toMatchInlineSnapshot(`
    <div
      className="App"
    >
      <TestComponent
        theme="secondary"
      />
    </div>
  `);
});
