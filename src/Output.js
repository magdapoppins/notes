import styled, { css } from "styled-components"
import { colors } from "./utils/colors"


export const OutputLump = styled.pre`
    margin: 0;
    line-height: 1.2em;
    overflow-wrap: break-word;
    white-space: pre-wrap;
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
    {items.map((d, i) => {
        if (d.role === 'info') {
            return  <OutputLump info key={i}>{d.content}</OutputLump>
        }
        else if (d.role === 'warning') {
            return  <OutputLump warning key={i}>{d.content}</OutputLump>
        }
        else {
            return <OutputLump key={i}>{d.content}</OutputLump>
        }
    })}
</>
