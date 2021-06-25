import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Icon from "..";

import css from "./iconStory.scss";

const stories = storiesOf("Components/Icon", module);
stories.addDecorator(withKnobs);

const icons = [
    "home",
    "home2",
    "home3",
    "office",
    "newspaper",
    "file-empty",
    "files-empty",
    "file-text2",
    "file-picture",
    "file-music",
    "file-play",
    "file-video",
    "file-zip",
];

stories.add("Default", () => {
    return (
        <div className={css.container}>
            {icons.map((i) => (
                <div key={i} className={css.iconWrapper}>
                    <Icon iconName={i} size="large" />
                    <span>{i}</span>
                </div>
            ))}
        </div>
    );
});
