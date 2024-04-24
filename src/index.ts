import { getVideoIdsFromSearch } from "./youtube/search"
import { getVideoDetails } from "./youtube/videos"


const searchTerm = "minecraft"
const maxResults = 250

const videoIds = await getVideoIdsFromSearch({ searchTerm, maxResults })

console.log("Found", videoIds.length, "videos")

const videoDetails = await getVideoDetails(videoIds)

Bun.write(`./data/${searchTerm}-videos.json`, JSON.stringify(videoDetails, null, 2))