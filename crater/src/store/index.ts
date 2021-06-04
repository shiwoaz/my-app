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

    const existCurrentRoom = USERS.find(({ id: uid, rooms: urooms }) => id === uid && rooms === rooms)

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

export default USERS

export { addUser, getUsers }