import { Pool, QueryResultRow } from "pg";
import { IPoolSettings, ISignInData } from "../interfaces/interfaces";

class UserService {
  private pool: Pool;
  constructor(databaseSettings: IPoolSettings) {
    this.pool = new Pool(databaseSettings);
  }

  private async isAlreadyExistUser<T extends QueryResultRow>(
    email: string,
  ): Promise<boolean> {
    const query = "SELECT * FROM users WHERE email='$1'";

    try {
      const client = await this.pool.connect();
      const { rows } = await client.query<T>(query, [email]);
      client.release();

      return !!rows.length;
    } catch (e) {
      throw e;
    }
  }

  async register({
    email,
    password,
    username,
  }: ISignInData): Promise<ISignInData> {
    const query =
      "INSERT INTO users (username, email, password) values ($1, $2, $3)";
    const values = [username, email, password];

    try {
      const client = await this.pool.connect();
      const isExists = await this.isAlreadyExistUser<ISignInData>(email);

      if (!isExists) {
        const response = await client.query<ISignInData>(query, values);
        client.release();
        return response.rows[0];
      } else {
        client.release();
        throw new Error("This user already exists!");
      }
    } catch (e) {
      throw e;
    }
  }
}

export default UserService;
