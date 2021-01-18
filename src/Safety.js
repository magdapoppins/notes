import React from "react"


const keyboard = `
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
`

const content = `
Hi there 👋🏼 I'm Magda. I work as a software engineer at Valohai.

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


During my free time I like to be outside and work on my garden. Relaxing
is super important to me (I feel it really feeds creativity) so I also
practice yoga and meditation.


Tech Spec 0-5:
----------
Python 3   ♥ ♥ ♥ ♥ ♥
TypeScript ♥ ♥ ♥ ♥
React      ♥ ♥ ♥
AWS        ♥ ♥ ♥ ♥
Docker     ♥ ♥ ♥
K8s        ♥ ♥
Postgres   ♥ ♥ ♥
`

const Safety = () => (
  <div style={{padding: '0 4em'}}>
    <h1>Welcome to the boring side of Magdas cv...</h1>
    <pre>
      {keyboard}
      {content}
    </pre>
  </div>
)

export default Safety;
