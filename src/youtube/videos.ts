import { iso8601ToSeconds } from "../helpers/duration-parser"


export async function getVideoDetails(videoIds: string[] | string): Promise<any[]> {

    const videoDetails = []

    for (let i = 0; i < Math.ceil(videoIds.length / 50); i++) {

        const chunk = videoIds.slice(i * 50, (i + 1) * 50)

        const params = new URLSearchParams({
            part: "snippet,statistics,contentDetails,topicDetails",
            id: Array.isArray(chunk) ? chunk.join(",") : chunk,
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

        videoDetails.push(...data.items.map((item: any) => ({
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
            description: item.snippet.description,
            channel: item.snippet.channelTitle,
            likeCount: item.statistics.likeCount,
            dislikeCount: item.statistics.dislikeCount,
            commentCount: item.statistics.commentCount,
            viewCount: item.statistics.viewCount,
            duration: iso8601ToSeconds(item.contentDetails.duration),
            publishedAt: item.snippet.publishedAt,
            caption: item.contentDetails.caption,
            tags: item.snippet.tags,
            topicCategories: item.topicDetails?.topicCategories,
            language: item.snippet.defaultAudioLanguage,
        })))

    }

    return videoDetails
}