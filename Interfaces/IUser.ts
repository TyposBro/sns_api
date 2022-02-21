export default interface IUser {
  username: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  coverPicture?: string;
  profilePicture?: string;
  followers?: Array<Number>;
  followings?: Number[];
  isAdmin?: boolean;
}
