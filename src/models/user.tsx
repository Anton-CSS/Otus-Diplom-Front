export interface IUser {
  _id: string;
  username: string;
  password: string;
  roles: string[];
}

export interface OneUser {
  username: string;
  password: string;
}
