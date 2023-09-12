// // @ts-nocheck
import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("likes").select("*").order('id', { ascending: true });
    return {
        countries: data ?? [],
    };
}