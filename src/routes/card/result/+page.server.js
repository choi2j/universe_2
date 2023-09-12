/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    let name = url.searchParams.get('name');
    let job = url.searchParams.get('job');
    let port = url.searchParams.get('portraitNum');
    return { name, job, port };
}