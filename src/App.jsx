import Introduction from "./components/Introduction"
import ProjectCollection from "./components/ProjectCollection"
function App() {

  return (
    <div>
      <header className="flex items-center justify-center bg-blue-500">
      <Introduction />
    </header>

    <ProjectCollection />
    </div>
  )
}

export default App;
