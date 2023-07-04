import {themes} from '@storybook/theming'
import React from 'react';

/** @type { import('@storybook/react').Preview } */
export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    }
  },
};

