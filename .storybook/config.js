import { configure } from '@storybook/react';

// function loadStories() {
//   require('../stories/router.js');
//   require('../stories/hooks.js');
//   require('../stories/antd-form.js');
//   require('../stories/react-motion.js');
//   require('../stories/react-measure.js');
//   require('../stories/react-dnd.js');
//   require('../stories/react-virtualized');
//   require('../stories/formik');
//   require('../stories/slate');
//   require('../stories/rc-field-form');
//   // automatically import all files ending in *.stories.js

//   // You can require as many stories as you need.
// }

const req = require.context('../stories', true, /\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);