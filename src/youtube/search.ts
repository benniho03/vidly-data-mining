export async function getVideoIdsFromSearch({ searchTerm, maxResults }: { searchTerm: string, maxResults: number }) {
    const params = new URLSearchParams({
        part: "snippet",
        q: searchTerm,
        key: process.env.API_KEY as string,
        maxResults: maxResults.toString(), // 50 is max
        type: "video",
    })

    const response = await fetch("https://www.googleapis.com/youtube/v3/search?" + params)

    const data = await response.json()

    if (!data.items) throw new Error("No videos found")

    return data.items.map((item: any) => item.id.videoId) as string[]

}