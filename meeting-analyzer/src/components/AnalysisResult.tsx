'use client'

interface AnalysisResultProps {
  analysis: string
  onReset: () => void
}

export default function AnalysisResult({ analysis, onReset }: AnalysisResultProps) {
  const downloadMarkdown = () => {
    const element = document.createElement('a')
    const file = new Blob([analysis], { type: 'text/markdown' })
    element.href = URL.createObjectURL(file)
    element.download = `meeting-analysis-${new Date().toISOString().split('T')[0]}.md`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(analysis)
      alert('클립보드에 복사되었습니다!')
    } catch (err) {
      console.error('복사 실패:', err)
      alert('복사에 실패했습니다.')
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* 액션 버튼들 */}
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">분석 결과</h2>
        <div className="flex gap-3">
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            📋 복사하기
          </button>
          <button
            onClick={downloadMarkdown}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            📥 다운로드
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            🔄 새로 분석하기
          </button>
        </div>
      </div>

      {/* 분석 결과 표시 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: convertMarkdownToHtml(analysis) 
            }}
          />
        </div>
      </div>

      {/* 원본 마크다운 보기 (토글 가능) */}
      <details className="bg-gray-50 border border-gray-200 rounded-lg">
        <summary className="px-4 py-3 cursor-pointer font-medium text-gray-700 hover:bg-gray-100">
          📝 원본 마크다운 보기
        </summary>
        <div className="px-4 pb-4">
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
            <code>{analysis}</code>
          </pre>
        </div>
      </details>
    </div>
  )
}

// 간단한 마크다운을 HTML로 변환하는 함수
function convertMarkdownToHtml(markdown: string): string {
  return markdown
    // 제목들
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-6 text-gray-900">$1</h1>')
    
    // 리스트
    .replace(/^\d+\.\s(.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
    .replace(/^-\s(.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
    .replace(/(<li.*<\/li>)/g, '<ul class="list-disc list-inside space-y-1 mb-4">$1</ul>')
    
    // 볼드
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    
    // 이탤릭
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    
    // 코드 블록
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-3 rounded border overflow-x-auto my-4"><code>$1</code></pre>')
    
    // 인라인 코드
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
    
    // 줄바꿈
    .replace(/\n/g, '<br>')
    
    // 이모지가 있는 부분은 좀 더 강조
    .replace(/(📊|🎯|👥|🌐|📋|🔍|💡)/g, '<span class="text-lg">$1</span>')
}