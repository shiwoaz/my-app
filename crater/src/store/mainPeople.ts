import { user } from "./index";

export type CurrentUser = Omit<user, "rooms">;
const MAINUSERS: Array<CurrentUser> = [];

export type addMainUserFunc = (info: CurrentUser) => void;

const addMainUser: addMainUserFunc = (user) => {
  console.log(user, "addmian");

  const { id, user_avatar, user_name } = user;

  //no params
  if (!(id && user_avatar && user_name)) return;

  //   const existCurrentRoom = MAINUSERS.find(({ id: uid }) => id === uid);

  //   //exist
  //   if (existCurrentRoom) return;

  //   console.log(existCurrentRoom, "e");

  //   if (!existCurrentRoom) {
  MAINUSERS.push({
    id,
    user_name,
    user_avatar,
  });
  //   }
};

export type removeMainUserFunc = (id: string) => void;

const removeMainUser: removeMainUserFunc = (id) => {
  const index = MAINUSERS.findIndex(({ id: uid }) => uid === id);
  console.log(MAINUSERS, index, "edel be main");

  if (index !== -1) MAINUSERS.splice(index, 1);

  console.log(MAINUSERS, index, "edel after mian");
};

export default MAINUSERS;

export { addMainUser, removeMainUser };
