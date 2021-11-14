import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
  async verifyPassword(password: string, hash: string): Promise<boolean> {
    try {
      const compared = await bcrypt.compare(password, hash);
      return compared;
    } catch (error) {
      throw error;
    }
  }

  async generateToken(id: number, email: string): Promise<string> {
    try {
      const token = jwt.sign({ id, email }, process.env.JWT_PRIVATE_KEY!, { algorithm: 'HS256' });
      return token;
    } catch (error) {
      throw error;
    }
  }
}
