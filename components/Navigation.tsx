
import React from 'react';
import { Screen } from '../types';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onAddClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate, onAddClick }) => {
  const navItems = [
    { id: Screen.OVERVIEW, label: 'Tổng quan', icon: 'home' },
    { id: Screen.BUDGET, label: 'Ngân sách', icon: 'account_balance_wallet' },
    { id: 'ADD', label: '', icon: 'add' }, // Center button
    { id: Screen.REPORTS, label: 'Báo cáo', icon: 'bar_chart' },
    { id: Screen.PROFILE, label: 'Hồ sơ', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-background-dark/95 backdrop-blur-md border-t border-white/10 pb-6 pt-2 px-6 z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          if (item.id === 'ADD') {
            return (
              <button
                key="add-btn"
                onClick={onAddClick}
                className="flex items-center justify-center -mt-8 bg-primary text-background-dark rounded-full h-14 w-14 shadow-lg shadow-primary/40 transform hover:scale-110 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-3xl font-bold">add</span>
              </button>
            );
          }

          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as Screen)}
              className={`flex flex-col items-center gap-1 w-16 transition-colors ${
                isActive ? 'text-primary' : 'text-slate-500 hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'font-fill' : ''} transition-transform group-hover:-translate-y-0.5`}>
                {item.icon}
              </span>
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
