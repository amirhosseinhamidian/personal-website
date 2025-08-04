import { create } from 'zustand';

interface EmployerState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  websiteName: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  setCompanyName: (value: string) => void;
  setWebsiteName: (value: string) => void;
}

export const useEmployerStore = create<EmployerState>((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  websiteName: '',
  setFirstName: (value) => set({ firstName: value }),
  setLastName: (value) => set({ lastName: value }),
  setEmail: (value) => set({ email: value }),
  setPhone: (value) => set({ phone: value }),
  setCompanyName: (value) => set({ companyName: value }),
  setWebsiteName: (value) => set({ websiteName: value }),
}));
