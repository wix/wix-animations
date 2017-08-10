import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
// import Markdown from './utils/Components/Markdown';
import CodeExample from './utils/Components/CodeExample';
// import Readme from '../../src/Animator/README.md';

import ExampleNesting from '../stories/Animations/ExampleNesting';
import ExampleNestingRaw from '!raw-loader!../stories/Animations/ExampleNesting';

import ExampleDebug from '../stories/Animations/ExampleDebug';
import ExampleDebugRaw from '!raw-loader!../stories/Animations/ExampleDebug';

import HowToUse from './Animations/HowToUse/HowToUse';
import CssStyles from './Animations/CssStyles/CssStyles';
import Sequence from './Animations/Sequence/Sequence';
import DurationAndDelay from './Animations/DurationAndDelay/DurationAndDelay';
import CustomClasses from './Animations/CustomClasses/CustomClasses';


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Animator', module)
  .add('Getting Started', () => (<HowToUse/>))
  .add('What can be animated', () => (<CssStyles />))
  .add('Multiple children', () => (<Sequence/>))
  .add('Duration & Delay', () => (<DurationAndDelay />))
  .add('Nesting', () => (
    <CodeExample title="Nesting"
                 code={ExampleNestingRaw}>
      <ExampleNesting/>
    </CodeExample>
  ))
  .add('Custom Classes & Styles', () => (<CustomClasses />))
  .add('Debug', () => (
    <CodeExample title="Debug"
                 code={ExampleDebugRaw}>
      <ExampleDebug/>
    </CodeExample>
  ))
  .add('Full API', () => (
    <div>api goes here</div>
  ))