import React, { ReactNode, FC, SyntheticEvent } from "react";
import classNames from "classnames";

import css from "./card.scss";

interface CardProps {
    children?: ReactNode;
    className?: string;
    [x: string]: any;
}

const Card: FC<CardProps> = (props: CardProps) => {
    const { children, className, ...others } = props;

    return (
        <div className={classNames(css.card, className)} {...others}>
            {children}
        </div>
    );
};

export default Card;
