import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import CodeBlock from "..";
import "../codeBlock.scss";

const stories = storiesOf("Components/CodeBlock", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <div>
            <h1>Code Block</h1>
            <p>Some information about the button</p>
            <CodeBlock>{`<CodeBlock className="anyClass">your code here..</CodeBlock>`}</CodeBlock>
        </div>
    );
});
