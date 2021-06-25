import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import css from "./documentation.scss";

const stories = storiesOf("Getting Started/Documentation", module);
stories.addDecorator(withKnobs);

stories.add("Intro", () => {
    return (
        <div className={css.container}>
            <h1>My UI Kit</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit tenetur error molestias consectetur
                porro, est quis sed maiores recusandae quo voluptates accusantium. Excepturi inventore laboriosam
                molestiae architecto. Excepturi, inventore!
            </p>
            <h2>About</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit tenetur error molestias consectetur
                porro, est quis sed maiores recusandae quo voluptates accusantium. Excepturi inventore laboriosam
                molestiae architecto. Excepturi, inventore!
            </p>

            <h2>Purpose</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit tenetur error molestias consectetur
                porro, est quis sed maiores recusandae quo voluptates accusantium. Excepturi inventore laboriosam
                molestiae architecto. Excepturi, inventore!
            </p>

            <h2>Toolkit</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit tenetur error molestias consectetur
                porro, est quis sed maiores recusandae quo voluptates accusantium. Excepturi inventore laboriosam
                molestiae architecto. Excepturi, inventore!
            </p>
        </div>
    );
});
