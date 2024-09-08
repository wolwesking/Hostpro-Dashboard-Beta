import pb from "$lib/Pocketbase";

type registerUserData = {
    username: string,
    email: string,
    emailVisibility: boolean,
    password: string,
    passowrdConfirm: string
}

export async function registerUser(username: string, email: string, password: string, passowrdConfirm: string) {
    const data: registerUserData = {
        username,
        email,
        emailVisibility: true,
        password,
        passowrdConfirm
    };
    try {
        const response = pb.collection("Users").create(data);
        return response;
    } catch (error) {
        return error;
    }
}

export async function loginUser(email: string, password: string) {
    try {
        const response = await pb.collection("Users").authWithPassword(email, password);
        return response;
    } catch (error) {
        return error;
    }
}

export async function getUserData(): Promise<any> {
    try {
        await pb.collection('Users').authRefresh();
        return pb.authStore.model || null;
    }
    catch (error) {
        return error;
    }
}

export function logout(): void {
    pb.authStore.clear();
}

export function isAuthenticated(): boolean {
    return pb.authStore.isValid;
}