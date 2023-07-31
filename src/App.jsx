import Introduction from "./components/Introduction"
import Projects from "./components/Projects"

function App() {

  return (
    <div>
      <header className="flex items-center justify-center bg-blue-500">
      <Introduction />
    </header>

    <Projects />
    </div>
  )
}

export default App
