import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';

import CustomHeightExample from './CustomHeightExample';
import CustomHeightExampleRaw from '!raw-loader!./CustomHeightExample';

import Markdown from '../../utils/Components/Markdown';
import Readme from './README.md';
import H2 from '../H2';

export const CustomHeightWidth = () => {
  return (
    <div>
      <H2>Custom Height/Width using functions</H2>
      <Markdown source={Readme} />
      <CodeExample title="Opacity" code={CustomHeightExampleRaw}>
        <CustomHeightExample />
      </CodeExample>
    </div>
  );
};

CustomHeightWidth.storyName = 'Custom Height/Width';
