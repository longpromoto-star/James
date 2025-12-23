
import React from 'react';

interface CategoryManagementScreenProps {
  onBack: () => void;
}

const categories = [
  { name: 'Ăn uống', desc: 'Thực phẩm, nhà hàng', icon: 'restaurant', color: 'bg-orange-500' },
  { name: 'Di chuyển', desc: 'Xăng xe, taxi, vé xe', icon: 'directions_car', color: 'bg-blue-500' },
  { name: 'Nhà cửa', desc: 'Điện nước, thuê nhà', icon: 'home', color: 'bg-purple-500' },
  { name: 'Giải trí', desc: 'Phim ảnh, game, du lịch', icon: 'sports_esports', color: 'bg-pink-500' },
  { name: 'Mua sắm', desc: 'Quần áo, đồ dùng cá nhân', icon: 'shopping_bag', color: 'bg-emerald-500' },
  { name: 'Sức khỏe', desc: 'Thuốc men, khám bệnh', icon: 'medical_services', color: 'bg-red-500' },
];

const CategoryManagementScreen: React.FC<CategoryManagementScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-white/5 sticky top-0 bg-background-dark/90 backdrop-blur-md z-10">
        <button onClick={onBack} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Quản lý danh mục</h2>
        <button className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-full">
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <p className="text-slate-500 text-sm font-medium mb-4">Danh mục chi tiêu của bạn</p>
          <div className="space-y-3">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-3xl border border-white/5 group hover:border-primary/30 transition-all">
                <div className={`h-12 w-12 rounded-2xl ${cat.color} bg-opacity-20 flex items-center justify-center text-white`}>
                   <span className="material-symbols-outlined text-2xl" style={{ color: cat.color.replace('bg-', '').replace('-500', '') }}>
                    {cat.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base">{cat.name}</h4>
                  <p className="text-xs text-slate-500">{cat.desc}</p>
                </div>
                <button className="h-10 w-10 flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            ))}

            {/* Add New Category Dotted Button */}
            <button className="w-full flex items-center justify-center gap-2 p-5 border-2 border-dashed border-white/10 rounded-3xl text-slate-500 hover:border-primary/50 hover:text-primary transition-all mt-4">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="font-bold">Thêm danh mục mới</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagementScreen;
