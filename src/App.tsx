import { useState } from 'react'
import './App.css'
function App() {
  const [folder, setFolder] = useState<string | null>(null)
  const [files, setFiles] = useState<string[]>([])
  const [scanning, setScanning] = useState(false)

  const handleSelectFolder = async () => {
    const selectedFolder =
      await window.cinemaLibrary.selectLibraryFolder()

    if (!selectedFolder) {
      return
    }

    setFolder(selectedFolder)
    setFiles([])
    setScanning(true)

    try {
      const scannedFiles =
        await window.cinemaLibrary.scanLibraryFolder(selectedFolder)

      setFiles(scannedFiles)
    } catch (error) {
      console.error('Failed to scan folder:', error)
    } finally {
      setScanning(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white p-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold">
          Cinema Library
        </h1>

        <p className="mt-2 text-gray-400">
          Local Movie Scanner
        </p>

        <button
          onClick={handleSelectFolder}
          className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
        >
          Add Library Folder
        </button>

        {folder && (
          <div className="mt-8">
            <p className="text-sm text-gray-400">
              Selected folder
            </p>

            <p className="mt-1 break-all text-white">
              {folder}
            </p>
          </div>
        )}

        {scanning && (
          <div className="mt-8 text-yellow-400">
            Scanning...
          </div>
        )}

        {!scanning && folder && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">
              Found {files.length} video files
            </h2>

            <div className="mt-4 space-y-2">
              {files.map((file) => (
                <div
                  key={file}
                  className="rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <p className="break-all text-sm text-gray-300">
                    {file}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default App