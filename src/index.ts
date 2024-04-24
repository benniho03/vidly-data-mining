import { getVideoIdsFromSearch } from "./youtube/search"
import { getVideoDetails } from "./youtube/videos"


const searchTerm = "theo t3 the modern react tutorial"
const maxResults = 50

const start = new Date().getTime()

const videoIds = await getVideoIdsFromSearch({ searchTerm, maxResults })

console.log("Found", videoIds.length, "videos")

const videoDetails = await getVideoDetails(videoIds)

const end = new Date().getTime()
const timeTaken = (end - start) / 1000

Bun.write(`./data/${searchTerm}-videos.json`, JSON.stringify(videoDetails, null, 2))

console.log((videoIds.length / timeTaken).toFixed(1), "videos per second")