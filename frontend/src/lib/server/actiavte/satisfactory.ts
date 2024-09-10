import pb from "$lib/Pocketbase";

export async function activateSatisfactoryBasic(data: any) {
    try {
        const record = await pb.collection('Subsciptions').create(data);

    } catch (error) {
        console.error(error)
    }
}
