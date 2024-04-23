import React, { useState, useEffect } from "react";

export interface TextWriterProps {
    speed: number,
    textArr: [string],
    cursor: string
}

const TextWriter = (props: TextWriterProps) => {
    const { speed, textArr, cursor } = props;
    const [text, setText] = useState("");
    const [idx, setIdx] = useState(1);
    const [item, setItem] = useState(0);
    const [lenZero, setLenZero] = useState(true);

    useEffect(() => {
        let Time = setInterval(() => {
            writeText()
        }, speed);
        return () => { clearInterval(Time) }
    })

    const writeText = () => {
        if (lenZero) {
            setText(textArr[item].slice(0, idx));
            setIdx(idx + 1)
            if (idx > textArr[item].length) {
                setLenZero(false);
            }
        } else {
            setText(textArr[item].slice(0, idx));
            setIdx(idx - 1)
            if (idx === 1) {
                setLenZero(true);
                if (item + 1 === textArr.length)
                    setItem(0)
                else setItem(item + 1)
            }
        }

    }
    return (
        <>
            {text}<div style={{ color: "#00f", display: 'inline' }}>{cursor}</div>
        </>
    )
};

export default TextWriter;


