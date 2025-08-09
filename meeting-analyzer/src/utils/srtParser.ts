interface SrtEntry {
  index: number
  startTime: string
  endTime: string
  text: string
}

interface ParsedMeeting {
  entries: SrtEntry[]
  fullText: string
  duration: string
  totalEntries: number
}

export function parseSRT(srtContent: string): ParsedMeeting {
  const lines = srtContent.trim().split('\n')
  const entries: SrtEntry[] = []
  let currentEntry: Partial<SrtEntry> = {}
  let textLines: string[] = []
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // 빈 줄이면 현재 엔트리를 완성하고 저장
    if (line === '') {
      if (currentEntry.index && currentEntry.startTime && currentEntry.endTime && textLines.length > 0) {
        entries.push({
          index: currentEntry.index,
          startTime: currentEntry.startTime,
          endTime: currentEntry.endTime,
          text: textLines.join(' ').trim()
        })
      }
      currentEntry = {}
      textLines = []
      continue
    }
    
    // 숫자만 있는 줄 (인덱스)
    if (/^\d+$/.test(line)) {
      currentEntry.index = parseInt(line)
      continue
    }
    
    // 시간 형식 줄 (00:00:00,000 --> 00:00:00,000)
    if (line.includes('-->')) {
      const [startTime, endTime] = line.split('-->').map(t => t.trim())
      currentEntry.startTime = startTime
      currentEntry.endTime = endTime
      continue
    }
    
    // 텍스트 줄
    textLines.push(line)
  }
  
  // 마지막 엔트리 처리
  if (currentEntry.index && currentEntry.startTime && currentEntry.endTime && textLines.length > 0) {
    entries.push({
      index: currentEntry.index,
      startTime: currentEntry.startTime,
      endTime: currentEntry.endTime,
      text: textLines.join(' ').trim()
    })
  }
  
  // 전체 텍스트 생성
  const fullText = entries.map(entry => entry.text).join(' ')
  
  // 지속 시간 계산
  const duration = entries.length > 0 
    ? `${entries[0].startTime} - ${entries[entries.length - 1].endTime}`
    : 'Unknown'
  
  return {
    entries,
    fullText,
    duration,
    totalEntries: entries.length
  }
}

export function timeToSeconds(timeStr: string): number {
  // 00:00:00,000 형식을 초로 변환
  const [time, ms] = timeStr.split(',')
  const [hours, minutes, seconds] = time.split(':').map(Number)
  
  return hours * 3600 + minutes * 60 + seconds + (parseInt(ms) / 1000)
}

export function formatDuration(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)
  
  if (hours > 0) {
    return `${hours}시간 ${minutes}분 ${seconds}초`
  } else if (minutes > 0) {
    return `${minutes}분 ${seconds}초`
  } else {
    return `${seconds}초`
  }
}