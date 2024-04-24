import { getVideoIdsFromSearch } from "./youtube/search"
import { getVideoDetails } from "./youtube/videos"

const searchTerm = "imkerei"

const videoIds = await getVideoIdsFromSearch({ searchTerm, maxResults: 50 })

console.log("Found", videoIds.length, "videos")

const videoDetails = await getVideoDetails(videoIds)

Bun.write(`./data/${searchTerm}-videos.json`, JSON.stringify(videoDetails, null, 2))