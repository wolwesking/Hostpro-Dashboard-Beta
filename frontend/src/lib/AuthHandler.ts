import pb from "$lib/Pocketbase";

// Type definition for user registration data
type RegisterUserData = {
    username: string;
    email: string;
    emailVisibility: boolean;
    password: string;
    passwordConfirm: string;
};

// Function to register a new user
export async function registerUser(username: string, email: string, password: string, passwordConfirm: string) {
    const data: RegisterUserData = {
        username,
        email,
        emailVisibility: true,
        password,
        passwordConfirm
    };
    try {
        const response = await pb.collection("Users").create(data);
        return response;
    } catch (error:any) {
        return { error: error.message };
    }
}

// Function to login a user
export async function loginUser(email: string, password: string) {
    try {
        const response = await pb.collection("Users").authWithPassword(email, password);
        return response;
    } catch (error:any) {
        return { error: error.message };
    }
}

// Function to get user data
export async function getUserData(): Promise<any> {
    try {
        await pb.collection('Users').authRefresh();
        return pb.authStore.model || null;
    } catch (error:any) {
        return { error: error.message };
    }
}

// Function to logout a user
export function LogoutUser(): void {
    pb.authStore.clear();
}

// Function to check if the user is authenticated
export async function isAuthenticated(): Promise<boolean> {
    try {
        await pb.collection('Users').authRefresh();
        return pb.authStore.isValid;
    } catch (error) {
        return false;
    }
}
