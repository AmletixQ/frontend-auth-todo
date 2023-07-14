import { Pool, QueryResultRow } from "pg";
import { IEnterUserData, IPoolSettings } from "../interfaces/interfaces";
import bcrypt from "bcrypt";

class UserService {
  private pool: Pool;
  constructor(databaseSettings: IPoolSettings) {
    this.pool = new Pool(databaseSettings);
  }

  private async isAlreadyExistUser<T extends QueryResultRow>(
    username: string,
  ): Promise<boolean> {
    const query = `SELECT * FROM users WHERE username='${username}'`;

    try {
      const client = await this.pool.connect();
      const { rows } = await client.query<T>(query);
      console;
      client.release();

      return !!rows.length;
    } catch (e) {
      throw e;
    }
  }

  async register({
    username,
    password,
  }: IEnterUserData): Promise<{ message: string }> {
    const query = "INSERT INTO users (username, password) values ($1, $2)";
    const hashPassword = await bcrypt.hash(password, 10);
    const values = [username, hashPassword];

    try {
      const client = await this.pool.connect();
      const isExists = await this.isAlreadyExistUser<IEnterUserData>(username);

      if (!isExists) {
        const res = await client.query<IEnterUserData>(query, values);
        client.release();
        return {
          message: "Successfully register to application!",
        };
      } else {
        client.release();
        return { message: "This user is already exists!" };
      }
    } catch (e) {
      return { message: "Error at server!" };
    }
  }
}

export default UserService;
