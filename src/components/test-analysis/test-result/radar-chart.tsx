"use client"

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts'

interface RadarChartProps {
  data: {
    extroversion: number
    openness: number
    emotional: number
    rational: number
  }
}

const RadarChart = ({ data }: RadarChartProps) => {
  // 转换数据格式
  const chartData = [
    { subject: '外向性', A: data.extroversion, fullMark: 100 },
    { subject: '开放性', A: data.openness, fullMark: 100 },
    { subject: '情感性', A: data.emotional, fullMark: 100 },
    { subject: '理性', A: data.rational, fullMark: 100 }
  ]

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar
            name="得分"
            dataKey="A"
            stroke="#7C3AED"
            fill="#7C3AED"
            fillOpacity={0.6}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChart 