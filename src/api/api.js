import {useMutation, useQuery} from "react-query";


export function useUsers() {
    return useQuery('users', async () => {
        const response = await fetch('http://localhost:8080/api/user');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return response.json();
    });
}

async function deleteUser(userId) {
    const response = await fetch(`http://localhost:8080/api/user/${userId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log("make request", data)
    return data;
}

async function addUser() {
    const response = await fetch(`http://localhost:8080/api/user`, {
        method: 'POST'
    });
    const data = await response.json();
    console.log("make request", data)
    return data;
}

export function useDeleteUser() {
    return useMutation((userId) => deleteUser(userId));
}

export function useAddUser() {
    return useMutation(() => addUser());
}