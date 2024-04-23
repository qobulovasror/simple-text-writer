import React from "react";

// Define props interface
export interface TextWriterProps {
    speed: number;
    textArr: string[];
    cursor: string;
}

const TextWriter: React.FC<TextWriterProps> = ({ speed, textArr, cursor }) => {
    const [text, setText] = React.useState("");
    const [idx, setIdx] = React.useState(0); // Start from 0 to avoid out of range
    const [forward, setForward] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            writeText();
        }, speed);

        return () => clearInterval(interval); // Clear interval on unmount
    }, [idx]); // Trigger effect only when idx changes

    const writeText = () => {
        let newText;
        let newIdx;

        // Determine the direction of typing
        if (forward) {
            newText = textArr[0].slice(0, idx + 1);
            newIdx = idx + 1;
        } else {
            newText = textArr[0].slice(0, idx - 1);
            newIdx = idx - 1;
        }

        setText(newText);

        // Change direction and reset index when reaching the end
        if (newIdx === textArr[0].length) {
            setForward(false);
        } else if (newIdx === 0) {
            setForward(true);
        }

        setIdx(newIdx);
    };

    return (
        <>
            {text}
            <span style={{ color: "#00f" }}>{cursor}</span>
        </>
    );
};

export default TextWriter;
