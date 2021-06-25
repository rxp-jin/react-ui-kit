import React, { ReactNode, FC } from "react";
import classNames from "classnames";

import css from "./icon.scss";

interface IconProps {
    iconName: string;
    className?: string;
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary";
    inverted?: boolean;
    [x: string]: any;
}

const Icon: FC<IconProps> = (props: IconProps) => {
    const { iconName, className, size = "small", color = "primary", inverted = false, ...others } = props;
    return (
        <i
            className={classNames(
                css.iconComponent,
                css[iconName],
                css[size],
                css[color],
                inverted && css.inverted,
                className,
            )}
            {...others}
        />
    );
};

export default Icon;
