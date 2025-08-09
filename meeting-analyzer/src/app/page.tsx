'use client'

import { useState } from 'react'
import FileUpload from '@/components/FileUpload'
import AnalysisResult from '@/components/AnalysisResult'
import TemplateSelector from '@/components/TemplateSelector'
import Logo from '@/components/Logo'
import { parseSRT } from '@/utils/srtParser'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState('three_levels_listening')

  const handleFileUpload = async (file: File, content: string) => {
    try {
      setIsLoading(true)
      
      // SRT 파일 파싱
      const parsedMeeting = parseSRT(content)
      
      // API 호출하여 분석 수행
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          meetingContent: parsedMeeting.fullText,
          templateType: selectedTemplate
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setAnalysis(result.analysis)
      } else {
        alert(`분석 실패: ${result.error}`)
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('파일 업로드 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setAnalysis(null)
  }

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEDD00' }}>
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <header className="bg-white/20 backdrop-blur-sm mb-16 py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6 flex justify-center">
              <Logo />
            </div>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto font-medium">
              SRT 파일을 업로드하면 AI가 5가지 전문 분석 방법론으로 
              <br />미팅을 자동 분석해드립니다
            </p>
          </div>
        </header>

        {/* 메인 컨텐츠 */}
        <main className="max-w-6xl mx-auto">
          {analysis ? (
            <AnalysisResult 
              analysis={analysis} 
              onReset={handleReset}
            />
          ) : (
            <div className="space-y-8">
              {/* 템플릿 선택 섹션 */}
              <section>
                <TemplateSelector 
                  selectedTemplate={selectedTemplate}
                  onTemplateChange={handleTemplateChange}
                  disabled={isLoading}
                />
              </section>

              {/* 파일 업로드 섹션 */}
              <section>
                <FileUpload 
                  onFileUpload={handleFileUpload}
                  isLoading={isLoading}
                />
              </section>

              {/* 사용자 후기 섹션 */}
              <section className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                  What people are saying about BizBee
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-400">
                    <p className="text-gray-700 mb-4 italic">
                      "Transform and analyze meetings automatically, improving team productivity and decision-making processes."
                    </p>
                    <div className="text-sm font-semibold text-gray-900">
                      – Korean Startup Association
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <p className="text-gray-700 mb-4 italic">
                      "It understands our business context—and it's starting to analyze like our senior consultants do."
                    </p>
                    <div className="text-sm font-semibold text-gray-900">
                      – Sarah Kim, Strategy Director
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <p className="text-gray-700 mb-4 italic">
                      "Our favorite tool for saving hours every week on meeting analysis and documentation."
                    </p>
                    <div className="text-sm font-semibold text-gray-900">
                      – Business Growth Podcast, Top 5 in Korea
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                    <p className="text-gray-700 mb-4 italic">
                      "If you're looking for an AI assistant to handle meeting analysis and strategic insights, BizBee is the perfect solution."
                    </p>
                    <div className="text-sm font-semibold text-gray-900">
                      – TechCrunch Korea
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                    <p className="text-gray-700 mb-4 italic">
                      "If you don't have BizBee for your meetings, you're missing out on game-changing insights."
                    </p>
                    <div className="text-sm font-semibold text-gray-900">
                      – Jennifer Lee, Management Consulting
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                    <p className="text-gray-700 mb-4 italic">
                      "BizBee's 5 analysis frameworks have transformed how we understand and act on our team discussions."
                    </p>
                    <div className="text-sm font-semibold text-gray-900">
                      – Michael Park, Innovation Labs
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </main>

        {/* 푸터 */}
        <footer className="text-center mt-20 text-gray-500 text-sm">
          <p>© 2024 MeetingIQ. AI를 활용한 미팅 분석 서비스</p>
        </footer>
      </div>
    </div>
  )
}
