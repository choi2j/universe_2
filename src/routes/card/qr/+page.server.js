/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const job = data.get('job');
        const portraitNum = data.get('currNum');

        return { name: name, job: job, portrait: portraitNum };
    }
}