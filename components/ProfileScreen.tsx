
import React from 'react';

interface ProfileScreenProps {
  onNavigateToCategories?: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigateToCategories }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] flex-1">Hồ sơ</h2>
        <button className="flex items-center justify-end active:opacity-70 transition-opacity">
          <span className="text-primary text-base font-bold leading-normal tracking-[0.015em]">Sửa</span>
        </button>
      </header>

      {/* Profile Info */}
      <div className="flex flex-col items-center justify-center pt-8 pb-6 px-4">
        <div className="relative mb-4 group cursor-pointer">
          <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-primary/20 p-1">
            <img 
              alt="Profile" 
              className="h-full w-full rounded-full object-cover" 
              src="https://picsum.photos/seed/user123/200/200"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-primary text-background-dark rounded-full p-1.5 border-4 border-background-dark">
            <span className="material-symbols-outlined text-[16px] leading-none">photo_camera</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mb-1">Nguyễn Văn A</h1>
        <p className="text-slate-400 text-sm font-medium">nguyenvana@example.com</p>
        
        <div className="flex gap-4 mt-6 w-full px-4">
          <div className="flex-1 bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center gap-1 shadow-sm border border-white/5">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tháng này</span>
            <span className="text-primary font-bold text-lg">5.2Tr đ</span>
          </div>
          <div className="flex-1 bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center gap-1 shadow-sm border border-white/5">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tiết kiệm</span>
            <span className="text-white font-bold text-lg">1.8Tr đ</span>
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="px-4 mt-2">
        <h3 className="text-slate-400 text-[11px] font-bold uppercase tracking-widest px-2 pb-2 mt-4">Tài khoản</h3>
        <div className="flex flex-col bg-white/5 rounded-xl overflow-hidden border border-white/5">
          <MenuButton icon="edit" label="Chỉnh sửa thông tin" iconBg="bg-primary/10" iconColor="text-primary" />
          <div className="h-[1px] bg-white/5 ml-14"></div>
          <MenuButton 
            icon="category" 
            label="Quản lý danh mục" 
            iconBg="bg-primary/10" 
            iconColor="text-primary" 
            onClick={onNavigateToCategories}
          />
        </div>
      </div>

      {/* App Settings Section */}
      <div className="px-4 mt-2">
        <h3 className="text-slate-400 text-[11px] font-bold uppercase tracking-widest px-2 pb-2 mt-6">Cài đặt ứng dụng</h3>
        <div className="flex flex-col bg-white/5 rounded-xl overflow-hidden border border-white/5">
          <MenuButton icon="settings" label="Cài đặt chung" iconBg="bg-orange-500/10" iconColor="text-orange-500" />
          <div className="h-[1px] bg-white/5 ml-14"></div>
          <MenuButton icon="notifications" label="Thông báo" iconBg="bg-red-500/10" iconColor="text-red-500" hasBadge />
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 mt-8 mb-10">
        <button className="w-full py-3.5 px-4 rounded-xl border border-red-500/30 text-red-500 font-bold hover:bg-red-500/10 active:bg-red-500/20 transition-all">
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

interface MenuButtonProps {
  icon: string;
  label: string;
  iconBg: string;
  iconColor: string;
  value?: string;
  hasBadge?: boolean;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, label, iconBg, iconColor, value, hasBadge, onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-4 p-4 justify-between w-full hover:bg-white/5 active:bg-white/10 transition-colors group"
  >
    <div className="flex items-center gap-4">
      <div className={`flex items-center justify-center rounded-lg ${iconBg} ${iconColor} shrink-0 size-10 group-hover:scale-105 transition-transform`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <p className="text-white text-base font-medium text-left">{label}</p>
    </div>
    <div className="flex items-center gap-2">
      {hasBadge && <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>}
      {value && <span className="text-slate-400 text-sm">{value}</span>}
      <span className="material-symbols-outlined text-slate-600">chevron_right</span>
    </div>
  </button>
);

export default ProfileScreen;
