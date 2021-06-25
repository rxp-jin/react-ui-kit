import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import CodeBlock from "../components/CodeBlock";

import css from "./documentation.scss";

const stories = storiesOf("Getting Started/Documentation", module);
stories.addDecorator(withKnobs);

stories.add("Install", () => {
    return (
        <div className={css.container}>
            <h1>Install the UI Kit</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit tenetur error molestias consectetur
                porro, est quis sed maiores recusandae quo voluptates accusantium. Excepturi inventore laboriosam
                molestiae architecto. Excepturi, inventore!
            </p>
            <CodeBlock>
                $npm install
                <br />
                $npm run storybook
            </CodeBlock>
        </div>
    );
});
