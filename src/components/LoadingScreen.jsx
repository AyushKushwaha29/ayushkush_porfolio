import { useEffect } from "react"
import { useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("")
  const fullText = "WElCOME"
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++

      if (index > fullText.length) {
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 1000)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [onComplete])
  return (
    <div className="fixed inset-0 z-50 bg-black text-grey-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <h1 href="#home" className="font-mono text-xl font-bold text-white">
          ayush<span className="text-blue-500">.tech</span>
        </h1>
      </div>
      <div className="w-[200px] h-[2px] bg-grey-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f61] animate-loading-bar"> </div>
      </div>
    </div>
  )
}
