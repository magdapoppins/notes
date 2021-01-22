import React from "react"
import { useEvent } from "react-use"
import styled, { keyframes } from "styled-components"


function blinkingEffect() {
    return keyframes`
        50% {
            opacity: 0;
        }
    `;
}

const Blinking = styled.span`
    animation: ${blinkingEffect} 1s ease infinite;
`

const Prompt = ({getResponse, location}) => {
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef()
    const focusInput = React.useCallback(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])
    React.useLayoutEffect(focusInput)
    useEvent('click', focusInput)

    const keyPressHandle = React.useCallback((e) => {
        if (getResponse(e) !== false){
            setValue('')
            focusInput()
        }
    }, [focusInput, getResponse])

    return <>
        <pre style={{'display': 'inline-block', 'margin': 0, lineHeight: '1.2em'}}>/home/guest/{location} 🛼 </pre><input
            ref={inputRef}
            type='text'
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={keyPressHandle}
            style={{position: 'fixed', left: '-999px', top: '-999px'}}
        />
        {value}
        <Blinking>&#x2588;</Blinking>
    </>
}

export default Prompt;