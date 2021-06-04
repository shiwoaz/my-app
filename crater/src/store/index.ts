export interface user {
    id: string
    user_name: string
    user_avatar: string
    rooms: string
}

const USERS: Array<user> = []

export type addUserFunc = (arg: user) => void

const addUser: addUserFunc = (user) => {
    const { id, user_avatar, user_name, rooms } = user

    //no params
    if (!(id && user_avatar && user_name && rooms)) return

    const existCurrentRoom = USERS.find(({ id: uid, rooms: urooms }) => id === uid && rooms === urooms)

    //exist
    if (existCurrentRoom) return

    console.log(existCurrentRoom, "e");

    if (!existCurrentRoom) {
        USERS.push({
            id,
            user_name,
            user_avatar,
            rooms
        })
    }

}

export type GetUsersFunc = (roomId: string) => user[]

const getUsers: GetUsersFunc = (room) => {

    const res = USERS.filter(({ rooms }) => rooms === room)
    console.log(res, room);

    return res
}

export type delUserFunc = (id: string) => void

const delUser: delUserFunc = (id) => {
    const index = USERS.findIndex(({ id: uid }) => uid === id)
    console.log(USERS, index, "edel be");

    if (index !== -1) USERS.splice(index, 0)
    
    console.log(USERS, index, "edel after");

}

export default USERS

export { addUser, getUsers, delUser }