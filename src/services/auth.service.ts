import { http } from "@/lib/http";
import { IEntrance } from "@/types/entrance.interface";

export class AuthService {
  static async signin(signinData: { user: IEntrance }) {
    await http.post("users/login", signinData);
  }

  static async signup(signupData: { user: IEntrance }) {
    await http.post("users", signupData);
  }

  static async logout() {
    await http.post("/users/logout");
  }
}
