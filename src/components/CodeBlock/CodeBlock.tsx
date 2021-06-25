import React, { ReactNode, FC } from "react";
import classNames from "classnames";

import css from "./codeBlock.scss";

interface CodeBlockProps {
    children?: ReactNode;
    className?: string;
    style?: "light" | "dark";
    [x: string]: any;
}

const CodeBlock: FC<CodeBlockProps> = (props: CodeBlockProps) => {
    const { children, className, style = "dark", ...others } = props;
    return (
        <pre className={classNames(css.codeBlock, css[style], className)} {...others}>
            <code>{children}</code>
        </pre>
    );
};

export default CodeBlock;
