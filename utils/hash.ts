// @ts-ignore
import { compare, hash } from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function isPasswordValid(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
