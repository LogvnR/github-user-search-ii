import create from 'zustand';

interface UserStore {
  user: string;
  setUser: (user: string) => void;
}

const userStore = create<UserStore>((set) => ({
  user: 'octocat',
  setUser: (user: string) => set({ user }),
}));

export default userStore;
