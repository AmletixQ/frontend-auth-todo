import { http } from "@/lib/http";
import ISession from "@/types/session/session.interface";
import ISessionStore from "@/types/session/sessionStore.interface";
import { useRouter } from "next/navigation";
import { create } from "zustand";

export const useSession = create<ISessionStore>((set) => ({
  session: {
    id: undefined,
    username: undefined,
    password: undefined,
  },
  entrance: async (_data, url) => {
    const {
      data: { user },
    } = await http.post<{ user: ISession }>(url, {
      user: _data,
    });
    set(() => ({ session: user }));
  },
  logout: async () => {
    await http.post("/users/logout");
  },
  update: () => {},
}));
