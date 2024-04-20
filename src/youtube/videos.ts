


export async function getVideoDetails(videoIds: string[] | string): Promise<any[]> {
    const params = new URLSearchParams({
        part: "snippet,statistics,contentDetails,topicDetails",
        id: Array.isArray(videoIds) ? videoIds.join(",") : videoIds,
        key: process.env.API_KEY as string,
    })

    const response = await fetch("https://www.googleapis.com/youtube/v3/videos?" + params)

    if (!response.ok) {
        console.error(response.status, response.statusText)
        console.log(await response.text())
        throw new Error("Failed to fetch videos",)
    }

    const data = await response.json()

    if (!data.items) throw new Error("No videos found")

    return data.items.map((item: any) => ({
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
        description: item.snippet.description,
        channel: item.snippet.channelTitle,
        likeCount: item.statistics.likeCount,
        dislikeCount: item.statistics.dislikeCount,
        commentCount: item.statistics.commentCount,
        viewCount: item.statistics.viewCount,
        duration: item.contentDetails.duration,
        publishedAt: item.snippet.publishedAt,
        caption: item.contentDetails.caption,
        tags: item.snippet.tags,
        topicCategories: item.topicDetails?.topicCategories,
        language: item.snippet.defaultAudioLanguage,
    }))
}