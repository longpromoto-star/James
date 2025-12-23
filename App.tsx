
import React, { useState } from 'react';
import { Screen } from './types';
import Navigation from './components/Navigation';
import OverviewScreen from './components/OverviewScreen';
import BudgetScreen from './components/BudgetScreen';
import ReportsScreen from './components/ReportsScreen';
import ProfileScreen from './components/ProfileScreen';
import AddTransactionModal from './components/AddTransactionModal';
import CategoryManagementScreen from './components/CategoryManagementScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.OVERVIEW);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.OVERVIEW:
        return <OverviewScreen />;
      case Screen.BUDGET:
        return <BudgetScreen />;
      case Screen.REPORTS:
        return <ReportsScreen />;
      case Screen.PROFILE:
        return <ProfileScreen onNavigateToCategories={() => setCurrentScreen(Screen.CATEGORY_MGMT)} />;
      case Screen.CATEGORY_MGMT:
        return <CategoryManagementScreen onBack={() => setCurrentScreen(Screen.PROFILE)} />;
      default:
        return <OverviewScreen />;
    }
  };

  const showNavigation = currentScreen !== Screen.CATEGORY_MGMT;

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white font-sans max-w-md mx-auto shadow-2xl relative">
      <main className={`flex-1 ${showNavigation ? 'pb-24' : ''} overflow-y-auto no-scrollbar`}>
        {renderScreen()}
      </main>

      {showNavigation && (
        <Navigation 
          currentScreen={currentScreen} 
          onNavigate={setCurrentScreen} 
          onAddClick={() => setIsAddModalOpen(true)}
        />
      )}

      {isAddModalOpen && (
        <AddTransactionModal onClose={() => setIsAddModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
