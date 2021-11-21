export default interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  entries: number;
  joined: Date | undefined;
}
