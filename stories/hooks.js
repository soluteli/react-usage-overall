import React from 'react';
import { storiesOf } from '@storybook/react';

import StateHookSample from '../samples/react-hooks/stateHook'
import EffectHookSample from '../samples/react-hooks/EffectHook'
import Deeplearn01 from '../samples/react-hooks/deeplearn-01'
import RefHook from '../samples/react-hooks/refHook'

storiesOf("React-Hooks", module)
  .add("useState", () => <StateHookSample />)
  .add("useEffect", () => <EffectHookSample />)
  .add("deeplearn01", () => <Deeplearn01 />)
  .add("useOwnRef", () => <RefHook />)
