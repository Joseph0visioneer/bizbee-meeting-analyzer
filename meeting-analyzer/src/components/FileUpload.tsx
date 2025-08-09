'use client'

import { useState, useCallback } from 'react'

interface FileUploadProps {
  onFileUpload: (file: File, content: string) => void
  isLoading: boolean
}

export default function FileUpload({ onFileUpload, isLoading }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleFile = (file: File) => {
    if (!file.name.endsWith('.srt')) {
      alert('SRT 파일만 업로드 가능합니다.')
      return
    }

    setFileName(file.name)
    
    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      onFileUpload(file, content)
    }
    reader.readAsText(file, 'UTF-8')
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [handleFile])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }, [handleFile])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive 
            ? 'border-blue-400 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        } ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          accept=".srt"
          onChange={handleChange}
          disabled={isLoading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center space-y-4">
          <div className="text-6xl text-gray-400">📁</div>
          <div className="text-lg font-medium text-gray-900">
            {fileName ? (
              <span className="text-blue-600">선택된 파일: {fileName}</span>
            ) : (
              'SRT 파일을 드래그하거나 클릭하여 업로드하세요'
            )}
          </div>
          <p className="text-sm text-gray-500">
            미팅 녹음의 자막 파일(.srt)을 업로드하면 AI가 분석해드립니다
          </p>
          
          {!fileName && (
            <button
              type="button"
              onClick={() => document.getElementById('fileInput')?.click()}
              disabled={isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              파일 선택하기
            </button>
          )}
          
          {isLoading && (
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent"></div>
              <span>분석 중...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}