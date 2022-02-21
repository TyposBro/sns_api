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
  desc: string;
  location: string;
  hometown: string;
  relationship: relationship;
  status: status;
}

enum relationship {
  married,
  single,
  divorced,
}

enum status {
  online,
  lastSeenRecently,
  silent,
  offline,
}
