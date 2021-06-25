import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Spinner from "..";

import css from "./spinnerStory.scss";

const stories = storiesOf("Components/Spinner", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <div>
            <h1>Spinner</h1>
            <p>Some information about the spinner</p>
            <div className={css.examples}>
                <div>
                    <Spinner loading />
                    <Spinner loading size="medium" />
                    <Spinner loading size="large" />
                </div>
                <div>
                    <Spinner loading color="secondary" />
                    <Spinner loading iconName="spinner2" color="secondary" />
                    <Spinner loading iconName="spinner3" color="secondary" />
                    <Spinner loading iconName="spinner4" color="secondary" />
                    <Spinner loading iconName="spinner5" color="secondary" />
                    <Spinner loading iconName="spinner6" color="secondary" />
                    <Spinner loading iconName="spinner7" color="secondary" />
                    <Spinner loading iconName="spinner8" color="secondary" />
                    <Spinner loading iconName="spinner9" color="secondary" />
                    <Spinner loading iconName="spinner10" color="secondary" />
                    <Spinner loading iconName="spinner11" color="secondary" />
                </div>
            </div>
        </div>
    );
});
