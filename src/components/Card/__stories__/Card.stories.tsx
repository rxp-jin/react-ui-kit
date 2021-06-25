import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Card from "..";

import css from "./cardStory.scss";

const stories = storiesOf("Components/Card", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <div>
            <h1>Card</h1>
            <p>Some information about the card</p>

            <div className={css.examples}>
                <Card>Card</Card>
                <Card>Card</Card>
                <Card>Card</Card>
                <Card>Card</Card>
                <Card>Card</Card>
                <Card>Card</Card>
                <Card>Card</Card>
                <Card>Card</Card>
                <Card>Card</Card>
            </div>
        </div>
    );
});
