import React from 'react';
import { storiesOf } from '@storybook/react';

import StateHookSample from './stateHook'
import EffectHookSample from './EffectHook'
import Deeplearn01 from './deeplearn-01'
import RefHook from './refHook'

storiesOf("React-Hooks", module)
  .add("useState", () => <StateHookSample />)
  .add("useEffect", () => <EffectHookSample />)
  .add("deeplearn01", () => <Deeplearn01 />)
  .add("useOwnRef", () => <RefHook />)
