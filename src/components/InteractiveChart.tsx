"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
  Line
} from "recharts";

const data = [
  { day: "Mon", actual: 120, guess: 160, zabonex: 122 },
  { day: "Tue", actual: 130, guess: 140, zabonex: 131 },
  { day: "Wed", actual: 150, guess: 110, zabonex: 148 },
  { day: "Thu", actual: 180, guess: 200, zabonex: 182 },
  { day: "Fri", actual: 210, guess: 220, zabonex: 208 },
  { day: "Sat", actual: 240, guess: 200, zabonex: 238 },
  { day: "Sun", actual: 220, guess: 180, zabonex: 245 },
];

export default function InteractiveChart() {
  return (
    <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-[#BFDCF0]/60 bg-white" style={{ fontFamily: 'var(--font-satoshi)' }}>
      {/* Mock macOS Window Header */}
      <div className="h-12 w-full border-b border-[#BFDCF0]/60 bg-white flex items-center px-4 gap-2 absolute top-0 z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>
        <div className="mx-auto text-xs font-semibold text-tertiary">ZabonEx AI Forecasting Engine</div>
      </div>

      <div className="pt-16 pb-6 px-4 sm:px-6 w-full aspect-[14/8] min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="var(--border-color)" opacity={0.5} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-muted)', fontWeight: 600, fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-muted)', fontWeight: 600, fontSize: 12 }}
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '12px',
                border: '1px solid var(--hairline)',
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)',
                color: 'var(--text-primary)',
                padding: '12px 16px'
              }}
              itemStyle={{ fontWeight: 700, padding: '4px 0', fontSize: 13 }}
              cursor={{ stroke: '#1A8FD4', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.4 }}
            />
            <Legend
              verticalAlign="top"
              height={40}
              iconType="circle"
              wrapperStyle={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: 13, marginTop: '-10px' }}
            />

            <defs>
              <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#86B3D1" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#86B3D1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="guessGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E9A93B" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#E9A93B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="zabonexGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0A72C4" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#0A72C4" stopOpacity={0} />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0A72C4" floodOpacity="0.25" />
              </filter>
            </defs>

            <Area
              type="monotone"
              dataKey="actual"
              fill="url(#actualGrad)"
              stroke="none"
            />
            <Area
              type="monotone"
              dataKey="zabonex"
              fill="url(#zabonexGrad)"
              stroke="none"
            />

            <Line
              type="monotone"
              dataKey="actual"
              name="Actual Sales"
              stroke="#86B3D1"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
              activeDot={{ r: 6, fill: '#86B3D1', strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="guess"
              name="Manual Guesswork"
              stroke="#E9A93B"
              strokeWidth={2}
              dot={{ r: 4, fill: 'var(--bg-surface)', strokeWidth: 2, stroke: '#E9A93B' }}
              activeDot={{ r: 6, fill: '#E9A93B', strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="zabonex"
              name="ZabonEx AI Predict"
              stroke="#0A72C4"
              strokeWidth={4}
              filter="url(#shadow)"
              dot={{ r: 5, fill: 'var(--bg-surface)', strokeWidth: 2, stroke: '#0A72C4' }}
              activeDot={{ r: 8, fill: '#0A72C4', strokeWidth: 0 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
