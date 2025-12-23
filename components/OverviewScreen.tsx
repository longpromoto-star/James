
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'T2', value: 400 },
  { name: 'T3', value: 700 },
  { name: 'T4', value: 300 },
  { name: 'T5', value: 900 },
  { name: 'T6', value: 500 },
  { name: 'T7', value: 800 },
  { name: 'CN', value: 600 },
];

const OverviewScreen: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <header className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-2xl font-bold">Chào buổi sáng, A!</h2>
          <p className="text-slate-400 text-sm">Hôm nay của bạn thế nào?</p>
        </div>
        <button className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      {/* Main Card */}
      <div className="bg-primary p-6 rounded-3xl text-background-dark shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-80">Tổng số dư</p>
          <h3 className="text-4xl font-bold mt-1">128.5Tr đ</h3>
          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2 bg-black/10 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
              <span className="text-xs font-bold">2.4Tr</span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
              <span className="text-xs font-bold">1.2Tr</span>
            </div>
          </div>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 h-32 w-32 bg-white/20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
      </div>

      {/* Chart Section */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-bold">Chi tiêu tuần này</h4>
          <span className="text-primary text-xs font-bold">Xem tất cả</span>
        </div>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10 }}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ backgroundColor: '#102216', border: '1px solid #13ec5b', borderRadius: '8px' }}
                itemStyle={{ color: '#13ec5b' }}
              />
              <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 3 ? '#13ec5b' : '#334155'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h4 className="font-bold mb-4">Giao dịch gần đây</h4>
        <div className="flex flex-col gap-3">
          <TransactionItem icon="shopping_bag" title="Siêu thị Winmart" time="Hôm nay, 08:30" amount="- 245.000đ" color="text-red-500" />
          <TransactionItem icon="payments" title="Lương tháng 9" time="Hôm qua, 17:00" amount="+ 15.000.000đ" color="text-primary" />
          <TransactionItem icon="restaurant" title="The Coffee House" time="Hôm qua, 14:20" amount="- 65.000đ" color="text-red-500" />
        </div>
      </div>
    </div>
  );
};

const TransactionItem: React.FC<{ icon: string, title: string, time: string, amount: string, color: string }> = ({ icon, title, time, amount, color }) => (
  <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </div>
    <div className="flex-1">
      <h5 className="font-bold text-sm">{title}</h5>
      <p className="text-[10px] text-slate-500">{time}</p>
    </div>
    <span className={`font-bold text-sm ${color}`}>{amount}</span>
  </div>
);

export default OverviewScreen;
