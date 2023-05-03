import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-preset-angular/setup-jest';

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop) => {
      return '';
    }
  })
});
