import { configure,addParameters } from "@storybook/react";
import { storySort } from './storybook-sort';

addParameters({
    options:{
        showRoots: true,
        storySort: storySort({ 
            order: [ 
                'Getting Started', 
                ['Intro'],
                'Components', 
                ['Button']
            ]
        }),
}})

function loadStories() {
    const req = require.context('../src/', true, /.stories.tsx$/);
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);