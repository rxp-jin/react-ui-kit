import React, { ReactNode, FC } from "react";
import classNames from "classnames";

import Icon from "../Icon";

import css from "./spinner.scss";

interface SpinnerProps {
    iconName?: string;
    className?: string;
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary";
    [x: string]: any;
}

const Spinner: FC<SpinnerProps> = (props: SpinnerProps) => {
    const { className, iconName = "spinner", size = "small", color = "primary", iconClassName, ...others } = props;

    return (
        <div className={classNames(css[size], className)}>
            <Icon
                iconName={iconName}
                size={size}
                color={color}
                className={classNames(css.spinner, iconClassName)}
                {...others}
            />
        </div>
    );
};

export default Spinner;
