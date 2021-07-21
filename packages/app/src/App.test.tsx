import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const app = renderer.create(<App />).toJSON();

  expect(app).toMatchInlineSnapshot(`
    <div
      className="App"
    >
      <div
        className="test-component test-component-secondary"
        data-testid="test-component"
      >
        <h1
          className="heading"
        >
          I'm the test component!
        </h1>
      </div>
    </div>
  `);
});
