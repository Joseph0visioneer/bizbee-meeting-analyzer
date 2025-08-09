'use client'

interface TemplateSelectorProps {
  selectedTemplate: string
  onTemplateChange: (template: string) => void
  disabled?: boolean
}

const TEMPLATE_OPTIONS = [
  {
    value: 'three_levels_listening',
    label: '3단계 리스닝 분석',
    description: '내부적/집중적/글로벌 듣기 관점으로 분석',
    icon: '🎯'
  },
  {
    value: 'mece_framework',
    label: 'MECE 프레임워크',
    description: '맥킨지 컨설팅 방식의 논리적 구조화 분석',
    icon: '📊'
  },
  {
    value: 'pyramid_principle',
    label: 'TPP (피라미드 원리)',
    description: 'SCQA 구조와 결론 우선 논리적 분석',
    icon: '🔺'
  },
  {
    value: 'logic_visualization',
    label: '로직 시각화',
    description: '관점 차이와 갭 해소 과정 시각적 분석',
    icon: '🧠'
  },
  {
    value: 'business_philosophy',
    label: '사업철학 Lv1~3',
    description: '기술자/관리자/기업가 관점 분류 분석',
    icon: '💼'
  }
]

export default function TemplateSelector({ selectedTemplate, onTemplateChange, disabled = false }: TemplateSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">
        📋 분석 템플릿 선택
      </h3>
      <p className="text-gray-600 mb-6">
        미팅 내용을 어떤 방식으로 분석하시겠습니까? 목적에 맞는 템플릿을 선택해주세요.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TEMPLATE_OPTIONS.map((template) => (
          <div
            key={template.value}
            className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 ${
              selectedTemplate === template.value
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => !disabled && onTemplateChange(template.value)}
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl flex-shrink-0">
                {template.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className={`text-lg font-medium mb-1 ${
                  selectedTemplate === template.value
                    ? 'text-blue-800'
                    : 'text-gray-900'
                }`}>
                  {template.label}
                </h4>
                <p className={`text-sm ${
                  selectedTemplate === template.value
                    ? 'text-blue-600'
                    : 'text-gray-600'
                }`}>
                  {template.description}
                </p>
              </div>
              
              {selectedTemplate === template.value && (
                <div className="absolute top-2 right-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {selectedTemplate && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600">✓</span>
            <span className="font-medium text-gray-900">선택된 템플릿:</span>
            <span className="text-blue-600">
              {TEMPLATE_OPTIONS.find(t => t.value === selectedTemplate)?.label}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}