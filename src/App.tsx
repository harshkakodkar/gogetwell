// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Views from '@/views'
import Themes from '@/views/Home/themes'
import appConfig from './configs/app.config'

// Optionally, import mock data if enabled
if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
              
                <Route path="/" element={<Views />} />
               
                <Route path="/themes" element={<Themes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
