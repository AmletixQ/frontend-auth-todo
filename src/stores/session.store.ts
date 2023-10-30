import { http } from "@/lib/http";
import ISession from "@/types/session/session.interface";
import ISessionStore from "@/types/session/sessionStore.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSession = create<ISessionStore>()(
  persist(
    (set) => ({
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
        set((state) => ({ session: user }));
      },
      logout: async () => {
        await http.post("/users/logout");
      },
      update: () => {},
    }),
    { name: "session", skipHydration: true },
  ),
);
