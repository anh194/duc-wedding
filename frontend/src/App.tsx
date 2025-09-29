import { useState } from 'react'
import './App.css'
import Screen1 from './components/screens/Screen1'
import Screen2 from './components/screens/Screen2'
import Screen3 from './components/screens/Screen3'
import Screen4 from './components/screens/Screen4'
import QrSidebar from './components/QrSidebar'

function App() {
  const [currentScreen, setCurrentScreen] = useState(1)

  const handleNext = () => setCurrentScreen((prev) => Math.min(prev + 1, 4))
  const handleBack = () => setCurrentScreen((prev) => Math.max(prev - 1, 1))

  return (
    <div>
      {currentScreen === 1 && <Screen1 onNext={handleNext} onBack={handleBack} />}
      {currentScreen === 2 && <Screen2 onNext={handleNext} onBack={handleBack} />}
      {currentScreen === 3 && <Screen3 onNext={handleNext} onBack={handleBack} />}
      {currentScreen === 4 && <Screen4 onNext={handleNext} onBack={handleBack} />}
      <QrSidebar />
    </div>
  )
}

export default App
