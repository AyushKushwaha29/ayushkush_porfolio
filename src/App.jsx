import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "@/components/ui/toaster"
import { LoadingScreen } from "./components/LoadingScreen"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
