
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Ăn uống', value: 40, color: '#13ec5b' },
  { name: 'Di chuyển', value: 15, color: '#3b82f6' },
  { name: 'Mua sắm', value: 25, color: '#ef4444' },
  { name: 'Nhà cửa', value: 10, color: '#f59e0b' },
  { name: 'Giải trí', value: 10, color: '#8b5cf6' },
];

const ReportsScreen: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Báo cáo chi tiêu</h2>
        <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs font-bold focus:outline-none">
          <option>Tháng này</option>
          <option>Tháng trước</option>
          <option>Năm nay</option>
        </select>
      </header>

      <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                 contentStyle={{ backgroundColor: '#102216', border: '1px solid #13ec5b', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center -mt-36 mb-24">
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Tổng chi tiêu</p>
           <h3 className="text-2xl font-bold">12.5Tr</h3>
        </div>
      </div>

      <div>
        <h4 className="font-bold mb-4">Chi tiết hạng mục</h4>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }}></div>
              <p className="text-sm font-medium flex-1">{item.name}</p>
              <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${item.value}%`, backgroundColor: item.color }}
                ></div>
              </div>
              <span className="text-sm font-bold w-12 text-right">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsScreen;
