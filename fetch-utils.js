const SUPABASE_URL = 
const SUPABASE_KEY =
    

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCats() {
    // from the cats table, select all items
    const response = await client.from('cats').select();
    // and return the response
    return response.data;
}

export async function getCat(id) {
    // from the cats table, select a single cat who has the matching id
    const response = await client.from('cats').select().match({ id: id }).single();
    // and return the response
    return response.data;
}
