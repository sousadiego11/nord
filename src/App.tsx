import { Header } from "./page/header"
import { Hero } from "./page/hero"
import { Services } from "./page/services"
import { Separator } from "./components/ui/separator"

function App() {
  return (
    <div className="px-36 scroll-smooth">
      <Header />
      <Separator decorative className="my-4" />
      <Hero />
      <Separator decorative className="my-4" />
      <Services />
    </div>
  )
}

export default App
