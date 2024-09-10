import pb from "$lib/Pocketbase";

export async function activateSatisfactoryBasic(data: any) {
    try {
        await pb.collection('Subsciptions').create(data);
        // TODO make this so only admins can do it!
        // TODO pterodactyl generate user, and generate server
    } catch (error) {
        console.error(error)
    }
}
