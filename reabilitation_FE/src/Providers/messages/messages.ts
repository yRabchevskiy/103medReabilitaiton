import { defineMessages } from 'react-intl';
export const scope = 'app';
export default defineMessages({
  hello: {
    id: `${scope}.hello`,
    defaultMessage: 'Hello',
  },
  by: {
    id: `${scope}.by`,
    defaultMessage: 'By',
  },
});