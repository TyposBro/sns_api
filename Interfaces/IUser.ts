export default interface IUser {
  username: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  coverPicture?: string;
  profilePicture?: string;
  followers?: Array<string>;
  followings?: string[];
  role: ERole;
  desc: string;
  location: string;
  hometown: string;
  relationship: ERelationship;
  status: EStatus;
}
export enum ERole {
  admin = "Admin",
  moderator = "Moderator",
  user = "User",
}

export enum ERelationship {
  married = "Married",
  single = "Single",
  divorced = "Divorced",
  unknown = "Unknown",
}

export enum EStatus {
  online = "Online",
  lastSeenRecently = "Last seen recently",
  silent = "Don't disturb me",
  offline = "Offline",
}
