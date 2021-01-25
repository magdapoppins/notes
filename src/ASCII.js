import styled from "styled-components"
import { colors } from "./utils/colors"

export const GlowASCII = styled.pre`
color: ${colors.red};
text-shadow: 1px 1px 2px ${colors.orange}, 0 0 25px ${colors.red}, 0 0 5px ${colors.yellow};
`

export const ASCII = () => {
  const text = `
                                  _______
__  __   ___                      \\  ___ \`'.
|  |/  \`.'   \`.            .--./)   ' |--.\\  \\
|   .-.  .-.   '          /.''\\    | |    \\  '
|  |  |  |  |  |    __   | |  | |   | |     |  '    __
|  |  |  |  |  | .:--.'.  \`-' /    | |     |  | .:--.'.
|  |  |  |  |  |/ |   \\ | /("'\`     | |     ' .'/ |   \\ |
|  |  |  |  |  |\`" __ | | \\ '---.   | |___.' /' \`" __ | |
|__|  |__|  |__| .'.''| |  /'""'.\\ /_______.'/   .'.''| |
              / /   | |_||     ||\\_______|/   / /   | |_
              \\ \\._,\\ '/\\'. __//              \\ \\._,\\ '/
                \`--'  \`"  \`'---'                \`--'  \`"
  `
  return <GlowASCII>
    {text}
  </GlowASCII>
}
