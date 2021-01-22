import React from "react"
import Prompt from "./Prompt"
import {ASCII} from "./ASCII"
import {Output} from "./Output"

// Use raw-loader to load the assets as they are instead of paths
const pages = require.context("!raw-loader!./content", true, /.md$/);

// TODO add ts and proper types for directories
// TODO use the key in the pagemap to check the available paths and files at current path

const root = makeDirectory()

function makeDirectory() {
  return {
    'directories': {},
    'files': {}
  };
}

pages.keys().forEach((key) => {
  const mod = pages(key);
  const path = key.substr(2).split('/')
  const filename = path.pop()
  let dir = root
  path.forEach(name => {
    if (!dir.directories[name]) {
      dir.directories[name] = makeDirectory()
    }
    dir = dir.directories[name]
  })
  dir.files[filename] = mod.default
})

function getDirectory(path) {
  let dir = root
  path.split('/').forEach(name => {
    if (!name.length) {
      return
    }
    if (!dir.directories[name]) {
      throw new Error("no such directory")
    }
    dir = dir.directories[name]
  })
  return dir
}

const bakeToLogMessage = (content, role) => ({content: content, role: role});

const CLI = () => {
  const [location, setLocation] = React.useState("notes")
  // const [file, setFile] = React.useState('')
  // const [subLocations, setSubLocation] = React.useState(["notes", "CV.md"]) // TODO use the content folder structure here!
  const [log, setLog] = React.useState([bakeToLogMessage("Type 'help' to get started.", 'info')])
  const endOfContents = React.useRef();

  const scrollToBottom = () => {
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

    if (input === 'clear()') {
      setLog([bakeToLogMessage("Type 'help' to get started.", "info")])
    }

    if (input === 'ls') {
      const dir = getDirectory(location)
      const outputDirs = Object.keys(dir.directories).map(n => n+'/')
      const outputFiles = Object.keys(dir.files)
      const newLog = [
        ...log, 
        bakeToLogMessage(`/home/guest/${location} 🛼 ls`),
        bakeToLogMessage([...outputFiles, ...outputDirs].join(' '))
      ]
      setLog(newLog)
    }

    if (input.startsWith('cd')) {
      const [, name] = input.split(' ')
      const dir = getDirectory(location)
      if (name === '..') {
        const locations = location.split("/")
        locations.pop()
        setLocation(locations.join('/'))
        setLog([
          ...log, 
          bakeToLogMessage(`/home/guest/${location} 🛼 ${input}`),
        ])
      }
      else {
        if (dir.directories[name]) {
          setLocation(location+'/'+name)
        }
        else {
          // TODO scream 
        }
      }
    }

    if (input === 'pwd') {
      setLog([
        ...log, 
        bakeToLogMessage(`Users/magda/home/guest/${location} 🛼`),
      ])
    }

    if (input.startsWith('cat ')) {
      const filename = input.split(' ')[1]
      const dir = getDirectory(location)
      console.log("dir", dir)
      console.log("filename", filename)
      if (dir.files[filename]) {
        setLog([
          ...log,
          bakeToLogMessage(`Users/magda/home/guest/${location} 🛼 cat ${filename}`),
          bakeToLogMessage(dir.files[filename]),
        ])
      }
    }
  }

  return <>
    <ASCII />
    <Output items={log}/>
    <Prompt getResponse={getResponse} location={location}/>
    <div ref={endOfContents}></div>
  </>
}

export default CLI;
