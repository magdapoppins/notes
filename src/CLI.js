import React from "react"
import Prompt from "./Prompt"
import {ASCII} from "./ASCII"
import {Output} from "./Output"


const bakeToLogMessage = (content, role) => ({content: content, role: role});

const CLI = () => {
  const [log, setLog] = React.useState([bakeToLogMessage("Type 'help' to get started.", 'info')])
  const endOfContents = React.useRef();

  const scrollToBottom = () => {
    console.log("Hiya scrollll")
    endOfContents.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      });
  };

  React.useEffect(() => {
    scrollToBottom()
}, [log])

  const getResponse = (e) => {
    if (e.key !== 'Enter' && e.key !== 'Tab') {
      return false;
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      // Todo add autocompletion
    }
    const input = e.target.value
    if (input === 'help') {
      const newLog = [...log]
      newLog.push(bakeToLogMessage('Your options are: work, education, hobbies, bio, tech-spec, notes', "info"))
      setLog(newLog)
    }
    if (input === 'bio') {
      const newLog = [...log]
      newLog.push(bakeToLogMessage(`
      Hi there 👋🏼 I'm Magda. I work as a software engineer at Valohai.
      `, 'text'))
      setLog(newLog)
    }

    if (input === 'work') {
      const newLog = [...log]
      newLog.push(bakeToLogMessage(`
      Work:
      -----
      2017-2018 Junior C# Consultant @ Academic Work in Malmö
      2018-2019 Full Stack Consultant @ WunderDog in Helsinki
      2019 --> Software Engineer @ Valohai in Turku / remote
      `, 'text'))
      setLog(newLog)
    }

    if (input === 'education') {
      const newLog = [...log]
      newLog.push(bakeToLogMessage(`
      Education:
      ----------
      2012-2014 Artisan of Textile (Omnia)
      2014-2019 BA, MA Educational Science (University of Turku)
      2017 C# Bootcamp (Acedemy by Academic Work)
      `, 'text'))
      setLog(newLog)
    }

    if (input === 'hobbies') {
      const newLog = [...log]
      newLog.push(bakeToLogMessage(`
      Hobbies:
      ----------
      During my free time I like to be outside and work on my garden. Relaxing
      is super important to me (I feel it really feeds creativity) so I also
      practice yoga and meditation.
      `, 'text'))
      setLog(newLog)
    }

    if (input === 'tech-spec') {
      const newLog = [...log]
      newLog.push(bakeToLogMessage(`
      Tech Spec 0-5:
      ----------
      Python 3   ♥ ♥ ♥ ♥ ♥
      TypeScript ♥ ♥ ♥ ♥
      React      ♥ ♥ ♥
      CSS/UI     ♥
      AWS        ♥ ♥ ♥ ♥
      Docker     ♥ ♥ ♥
      Postgres   ♥ ♥ ♥
      `, 'text'))
      setLog(newLog)
    }

    if (input === 'clear') {
      setLog([bakeToLogMessage("Type 'help' to get started.", "info")])
    }
  }

  return <>
    <ASCII />
    <Output items={log}/>
    <Prompt getResponse={getResponse}/>
    <div ref={endOfContents}></div>
  </>
}

export default CLI;
