
export enum Screen {
  OVERVIEW = 'OVERVIEW',
  BUDGET = 'BUDGET',
  REPORTS = 'REPORTS',
  PROFILE = 'PROFILE',
  CATEGORY_MGMT = 'CATEGORY_MGMT'
}

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
  note: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
