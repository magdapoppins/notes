import React from "react";
import { GlowASCII } from "./ASCII";
import { OutputLump } from "./Output";

const keyboard = `
THIS IS
            THE BORING
                            SIDE...
__________________________________________________
|          _____________________________           |
| [1] [2]  _____________________________ [_][_][_] |
| [3] [4]  [_][_][_] [_][_][_][_] [_][_] [_][_][_] |
| [5] [6]  [][][][][][][][][][][][][][_] [1][2][3] |
| [7] [8]  [_][][][][][][][][][][][][][] [4][5][6] |
| [9][10]  [__][][][][][][][][][][][][_] [7][8][9] |
| [11][12] [___][][][][][][][][][][][__] [__][0][] |
|          [_][______________][_]                  |
|__________________________________________________|

`;

const hello = `Hi there 👋🏼 I'm Magda. I work as a software engineer at Valohai.`;

const cv = `
Work:
-----
2017-2018 Junior C# Consultant @ Academic Work in Malmö
2018-2019 Full Stack Consultant @ WunderDog in Helsinki
2019 --> Software Engineer @ Valohai in Turku / remote

Education:
----------
2012-2014 Artisan of Textile (Omnia)
2014-2019 BA, MA Educational Science (University of Turku)
2017 C# Bootcamp (Acedemy by Academic Work)
`;

const hobbies = `
During my free time I like to be outside and work on my garden. Relaxing
is super important to me (I feel it really feeds creativity) so I also
practice yoga and meditation.
`;

const tech = `
Tech Spec 0-5:
----------
Python 3   ♥ ♥ ♥ ♥ ♥
TypeScript ♥ ♥ ♥ ♥
React      ♥ ♥ ♥
AWS        ♥ ♥ ♥ ♥
Docker     ♥ ♥ ♥
K8s        ♥ ♥
Postgres   ♥ ♥ ♥

`;

const Safety = () => (
  <>
    <GlowASCII>{keyboard}</GlowASCII>
    <OutputLump warning>{hello}</OutputLump>
    <OutputLump info>{cv}</OutputLump>
    <OutputLump surprise>{hobbies}</OutputLump>
    <OutputLump>{tech}</OutputLump>
  </>
);

export default Safety;
