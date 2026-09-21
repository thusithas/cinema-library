import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [appInfo, setAppInfo] = useState<{
    name: string
    version: string
    platform: string
  } | null>(null)

  useEffect(() => {
    window.cinemaLibrary.getAppInfo().then((info) => {
      setAppInfo(info)
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          {appInfo?.name ?? 'Cinema Library'}
        </h1>

        {appInfo && (
          <div className="mt-4 text-gray-400">
            <p>Version: {appInfo.version}</p>
            <p>Platform: {appInfo.platform}</p>
          </div>
        )}

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Electron IPC is working
        </div>
      </div>
    </div>
  )
}

export default App