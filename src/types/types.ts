export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
  aboutMe: string;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PostType = {
  id: number;
  text: string;
  likes: number;
  comments: number;
};

export type UserType = {
  id: number;
  name: string;
  status: string | null;
  photos: PhotosType;
  followed: boolean;
};

export type DialogueType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  message: string;
};

export type NavLinksType = {
  id: number;
  name: string;
  path: string;
  icon: string;
};
