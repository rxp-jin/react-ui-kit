import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "../";
import CodeBlock from "../../CodeBlock";
import Icon from "../../Icon";

import css from "./buttonStory.scss";

const stories = storiesOf("Components/Button", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <div>
            <h1>Button</h1>
            <p>Some information about the button</p>

            <div className={css.examples}>
                <div>
                    <Button onClick={() => alert("Primary button clicked!")}>Primary</Button>
                    <Button inverted>Inverted</Button>
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <Button loading inverted>
                        Inverted Loading
                    </Button>
                    <Button iconName="home">Icon</Button>
                    <Button iconName="home" inverted>
                        Inverted Icon
                    </Button>
                </div>
                {/* <CodeBlock>{`<Button>Primary</Button>
<Button inverted>Inverted</Button>
<Button disabled>Disabled</Button>
<Button iconName="home">Icon</Button>
<Button iconName="home" inverted>Inverted Icon</Button>`}</CodeBlock> */}
                <div>
                    <Button color="secondary" onClick={() => alert("Secondary button clicked!")}>
                        Secondary
                    </Button>
                    <Button color="secondary" inverted>
                        Inverted
                    </Button>
                    <Button color="secondary" disabled>
                        Disabled
                    </Button>
                    <Button color="secondary" loading>
                        Loading
                    </Button>
                    <Button color="secondary" loading inverted>
                        Inverted Loading
                    </Button>
                    <Button color="secondary">
                        <Icon iconName="home" color="secondary" inverted size="medium" />
                        Icon
                    </Button>
                    <Button color="secondary" inverted>
                        <Icon iconName="home" color="secondary" size="medium" />
                        Inverted Icon
                    </Button>
                </div>
            </div>
        </div>
    );
});
