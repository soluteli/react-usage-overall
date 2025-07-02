import React from 'react';
import StateHookSample from './stateHook';
import EffectHookSample from './EffectHook';
// import Deeplearn01 from './deeplearn-01';
import RefHook from './refHook';
import Hover from './Hover.jsx';

export default {
  title: 'React-Hooks',
};

export const UseState = () => <StateHookSample />;
export const UseEffect = () => <EffectHookSample />;
// export const Deeplearn01 = () => <Deeplearn01 />;
export const UseOwnRef = () => <RefHook />;
export const HoverStory = () => <Hover />;
