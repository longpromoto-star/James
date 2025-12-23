
import React from 'react';

const BudgetScreen: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Ngân sách tháng 5</h2>
        <button className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      {/* Main Budget Summary Card */}
      <div className="bg-primary p-6 rounded-3xl text-background-dark shadow-xl shadow-primary/20">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Còn lại để chi tiêu</p>
            <h3 className="text-3xl font-bold">8.450.000đ</h3>
          </div>
          <div className="bg-background-dark/10 p-2 rounded-xl">
            <span className="material-symbols-outlined">analytics</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-3 bg-background-dark/10 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-background-dark w-[65%] rounded-full"></div>
        </div>
        <div className="flex justify-between text-[10px] font-bold opacity-70">
          <span>Đã tiêu: 15.550.000đ</span>
          <span>Tổng: 24.000.000đ</span>
        </div>
      </div>

      {/* Income vs Expense Comparison */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <span className="material-symbols-outlined text-sm">arrow_downward</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Thu nhập</span>
          </div>
          <h4 className="text-lg font-bold">25.000.000đ</h4>
          <p className="text-[10px] text-slate-500 mt-1">+12% so với tháng trước</p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-2 text-red-400">
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Chi phí</span>
          </div>
          <h4 className="text-lg font-bold">15.550.000đ</h4>
          <p className="text-[10px] text-slate-500 mt-1">75% hạn mức đã dùng</p>
        </div>
      </div>

      {/* Category Budgets */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold">Ngân sách theo hạng mục</h4>
          <button className="text-primary text-xs font-bold">Điều chỉnh</button>
        </div>
        
        <div className="space-y-4">
          <BudgetCategoryItem 
            icon="restaurant" 
            name="Ăn uống" 
            spent="4.200.000đ" 
            total="6.000.000đ" 
            percent={70} 
            color="bg-orange-500" 
          />
          <BudgetCategoryItem 
            icon="directions_car" 
            name="Di chuyển" 
            spent="1.500.000đ" 
            total="2.000.000đ" 
            percent={75} 
            color="bg-blue-500" 
          />
          <BudgetCategoryItem 
            icon="shopping_bag" 
            name="Mua sắm" 
            spent="5.850.000đ" 
            total="5.000.000đ" 
            percent={117} 
            color="bg-red-500" 
            isOver
          />
          <BudgetCategoryItem 
            icon="home" 
            name="Nhà cửa" 
            spent="4.000.000đ" 
            total="11.000.000đ" 
            percent={36} 
            color="bg-purple-500" 
          />
        </div>
      </div>

      {/* Floating Action Hint */}
      <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl flex items-center gap-4 mb-6">
        <span className="material-symbols-outlined text-primary">tips_and_updates</span>
        <p className="text-xs text-slate-300">Bạn đã chi tiêu vượt mức <b>Mua sắm</b>. Hãy cân nhắc cắt giảm các khoản không cần thiết.</p>
      </div>
    </div>
  );
};

interface BudgetCategoryItemProps {
  icon: string;
  name: string;
  spent: string;
  total: string;
  percent: number;
  color: string;
  isOver?: boolean;
}

const BudgetCategoryItem: React.FC<BudgetCategoryItemProps> = ({ icon, name, spent, total, percent, color, isOver }) => (
  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-3">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl ${color} bg-opacity-20 flex items-center justify-center`}>
          <span className="material-symbols-outlined" style={{ color: color.replace('bg-', '').replace('-500', '') }}>{icon}</span>
        </div>
        <div>
          <h5 className="text-sm font-bold">{name}</h5>
          <p className="text-[10px] text-slate-500">{spent} / {total}</p>
        </div>
      </div>
      <span className={`text-xs font-bold ${isOver ? 'text-red-500' : 'text-slate-400'}`}>
        {percent}%
      </span>
    </div>
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div 
        className={`h-full rounded-full ${isOver ? 'bg-red-500' : 'bg-primary'}`} 
        style={{ width: `${Math.min(percent, 100)}%` }}
      ></div>
    </div>
  </div>
);

export default BudgetScreen;
