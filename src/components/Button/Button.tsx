import React, { ReactNode, FC, SyntheticEvent } from "react";
import classNames from "classnames";

import Icon from "../Icon";
import Spinner from "../Spinner";

import css from "./button.scss";
interface ButtonProps {
    label?: string;
    children?: ReactNode;
    className?: string;
    color?: "primary" | "secondary";
    loading?: boolean;
    disabled?: boolean;
    inverted?: boolean;
    expanded?: boolean;
    pressed?: boolean;
    tabIndex?: number;
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    onKeydown?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    iconName?: string;
    iconClassName?: string;
    [x: string]: any;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        label,
        children,
        className,
        color = "primary",
        loading = false,
        disabled = false,
        inverted = false,
        expanded = false,
        pressed = false,
        tabIndex = 0,
        onClick,
        onKeydown,
        iconName,
        iconClassName,
        ...others
    } = props;

    return (
        <button
            className={classNames(
                css.button,
                css[color],
                (disabled || loading) && css.disabled,
                inverted && css.inverted,
                loading && css.loading,
                className,
            )}
            disabled={disabled}
            arial-label={label}
            arial-expanded={expanded}
            arial-pressed={pressed}
            tabIndex={tabIndex}
            onClick={onClick}
            onKeyDown={onKeydown}
            {...others}
        >
            {loading && <Spinner className={classNames(css.spinner)} />}

            {!!iconName && (
                <Icon
                    iconName={iconName}
                    className={classNames(css.icon, css[color], inverted && css.inverted, iconClassName)}
                />
            )}
            {children}
        </button>
    );
};

export default Button;
