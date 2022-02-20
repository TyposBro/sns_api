export default interface IUser {
  username: String;
  name: String;
  email: String;
  password: String;
  avatar?: String;
  coverPicture: String;
  profilePicture: String;
  followers: Array<Number>;
  followings: Number[];
  isAdmin: boolean;
}
