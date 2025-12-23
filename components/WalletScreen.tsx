
import React from 'react';

const WalletScreen: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Ví của tôi</h2>
        <button className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      {/* Cards List */}
      <div className="flex flex-col gap-4">
        <CreditCard type="Mastercard" number="**** **** **** 8888" balance="45.000.000đ" color="bg-zinc-900" />
        <CreditCard type="Visa" number="**** **** **** 1234" balance="12.400.000đ" color="bg-blue-600" />
      </div>

      {/* Other Accounts */}
      <div>
        <h4 className="font-bold mb-4">Tài khoản khác</h4>
        <div className="bg-white/5 rounded-2xl divide-y divide-white/5 border border-white/5 overflow-hidden">
          <AccountRow icon="savings" title="Tiết kiệm mua nhà" balance="850.000.000đ" />
          <AccountRow icon="currency_bitcoin" title="Ví Crypto (USDT)" balance="2.450$" />
          <AccountRow icon="wallet" title="Tiền mặt" balance="4.200.000đ" />
        </div>
      </div>
    </div>
  );
};

const CreditCard: React.FC<{ type: string, number: string, balance: string, color: string }> = ({ type, number, balance, color }) => (
  <div className={`${color} p-6 rounded-3xl relative overflow-hidden h-44 shadow-lg flex flex-col justify-between border border-white/10`}>
    <div className="flex justify-between items-start">
      <div className="h-10 w-12 bg-white/20 rounded-lg backdrop-blur-md"></div>
      <span className="font-bold text-lg italic text-white/50">{type}</span>
    </div>
    <div>
      <p className="text-xs text-white/60 mb-1">{number}</p>
      <h3 className="text-2xl font-bold">{balance}</h3>
    </div>
    {/* Decor circles */}
    <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-white/10 rounded-full blur-2xl"></div>
  </div>
);

const AccountRow: React.FC<{ icon: string, title: string, balance: string }> = ({ icon, title, balance }) => (
  <div className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors cursor-pointer">
    <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <div className="flex-1">
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-slate-500">Hoạt động bình thường</p>
    </div>
    <span className="font-bold text-sm">{balance}</span>
  </div>
);

export default WalletScreen;
