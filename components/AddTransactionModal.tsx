
import React, { useState } from 'react';

interface AddTransactionModalProps {
  onClose: () => void;
}

const categories = [
  { id: '1', name: 'Ăn uống', icon: 'restaurant', active: true },
  { id: '2', name: 'Di chuyển', icon: 'directions_car', active: false },
  { id: '3', name: 'Mua sắm', icon: 'shopping_bag', active: false },
  { id: '4', name: 'Giải trí', icon: 'theater_comedy', active: false },
  { id: '5', name: 'Nhà cửa', icon: 'home', active: false },
];

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({ onClose }) => {
  const [amount, setAmount] = useState('150.000');

  return (
    <div className="fixed inset-0 z-[100] bg-background-dark flex flex-col animate-in fade-in slide-in-from-bottom duration-300">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-white/5">
        <button onClick={onClose} className="text-slate-400 font-medium">Hủy</button>
        <h2 className="text-lg font-bold">Nhập chi phí</h2>
        <button onClick={onClose} className="text-primary font-bold">Lưu</button>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-8">
        {/* Amount Section */}
        <div className="text-center pt-4">
          <p className="text-slate-400 text-sm font-medium mb-1">Chi phí gốc</p>
          <div className="text-primary text-6xl font-bold tracking-tight">
            {amount}
          </div>
        </div>

        {/* Categories Horizontal Scroll */}
        <div>
          <label className="text-primary text-sm font-bold mb-4 block">Danh mục</label>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center gap-2 min-w-[72px]">
                <div className={`h-16 w-16 rounded-full flex items-center justify-center border-2 transition-all ${
                  cat.active ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5'
                }`}>
                  <span className={`material-symbols-outlined text-2xl ${cat.active ? 'text-primary font-fill' : 'text-slate-400'}`}>
                    {cat.icon}
                  </span>
                </div>
                <span className={`text-[11px] font-bold ${cat.active ? 'text-primary' : 'text-slate-500'}`}>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-slate-400 text-sm font-medium">Tên khoản chi</label>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">edit</span>
              <input 
                type="text" 
                placeholder="Ví dụ: Cà phê sáng" 
                className="bg-transparent border-none outline-none w-full text-white placeholder:text-slate-600 font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-slate-400 text-sm font-medium">Số tiền đã trả</label>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">payments</span>
              <div className="flex-1 text-white font-bold">{amount} đ</div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-slate-400 text-sm font-medium">Ngày giao dịch</label>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
                <span className="text-white font-medium">Hôm nay, 24/05/2024</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-slate-400 text-sm font-medium">Địa điểm (Tùy chọn)</label>
            <div className="relative h-24 rounded-2xl overflow-hidden border border-white/5 group cursor-pointer">
              <img 
                src="https://api.placeholder.com/400/100?text=Map+Preview" 
                alt="Map" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-red-500">location_on</span>
                <span className="text-white font-bold text-sm">Thêm vị trí</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="p-4 bg-background-dark/80 backdrop-blur-md">
        <button className="w-full bg-primary text-background-dark font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transform active:scale-95 transition-all">
          Lưu chi phí
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default AddTransactionModal;
