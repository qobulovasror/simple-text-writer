import React from "react";
export interface TextWriterProps {
    speed: number;
    textArr: [string];
    cursor: string;
}
declare const TextWriter: (props: TextWriterProps) => React.JSX.Element;
export default TextWriter;
