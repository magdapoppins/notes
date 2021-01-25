import React from "react"
import { useEvent } from "react-use"
import { colors } from "./utils/colors"

const Prompt = ({getResponse, prompt, setPrompt}) => {
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

    return <div>
        guest@magda <input
            ref={inputRef}
            type='text'
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyPress={keyPressHandle}
            style={{position: 'fixed', left: '-999px', top: '-999px'}}
        />
        {value}
        <span className='blink' style={{backgroundColor: colors.blue}}>&#x2588;</span>
    </div>
}

export default Prompt;