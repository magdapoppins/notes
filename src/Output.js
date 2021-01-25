import styled, { css } from "styled-components"
import { colors } from "./utils/colors"


export const OutputLump = styled.pre`
    color: ${colors.blue};
    ${props => props.info && css`
        color: ${colors.darkPink};
    `}
    ${props => props.warning && css`
        color: ${colors.red};
    `}
    ${props => props.surprise && css`
    color: ${colors.yellow};
`}
`

// Items come in shape {content: 'hello', role: 'info/text/warning'}
export const Output = ({items}) => <>
    {items.map(i => {
        if (i.role === 'info') {
            return  <OutputLump info key={i.content}>{i.content}</OutputLump>
        }
        else if (i.role === 'warning') {
            return  <OutputLump warning key={i.content}>{i.content}</OutputLump>
        }
        else {
            return <OutputLump key={i.content}>{i.content}</OutputLump>
        }
    })}
</>
