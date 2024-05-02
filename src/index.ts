import { getVideoIdsFromSearch } from "./youtube/search"
import { getVideoDetails } from "./youtube/videos"
import { PrismaClient } from '@prisma/client'

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

const prisma = new PrismaClient()

async function main() {
    console.log("test")
    const video = await prisma.videos.create({
        data: {
            id: 1,
            title: "",
            thumbnail: "",
            description: "",
            channel: "",
            likeCount: 0,
            commentCount: 0,
            viewCount: 0,
            duration: "",
            publishedAt: "",
            caption: "",
            tags: [""],
            topicCategories: [""],
            language: ""
        },
    })
    console.log("Created video", { video })
    const getVideos = await prisma.videos.findMany()
}

main()
    .then(async () => {
        console.log("Doch hier?")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error("Wir sind hier drinne")
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })