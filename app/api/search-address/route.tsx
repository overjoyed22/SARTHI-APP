import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";
const sessionToken = uuidv4();  // Generate a random UUID

export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('q');

    const res = await fetch(
        BASE_URL + 
        '?q=' + searchText + 
        '&language=en&limit=8&session_token=' + sessionToken + 
        '&access_token=' + process.env.MAPBOX_ACCESS_TOKEN,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    const searchResult = await res.json();
    return NextResponse.json(searchResult);
}
