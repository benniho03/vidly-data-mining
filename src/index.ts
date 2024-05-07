import { postVideos } from "../db"
import { getVideoIdsFromSearch } from "./youtube/search"
import { getVideoDetails } from "./youtube/videos"
import { Prisma, PrismaClient } from '@prisma/client'

const searchTerm = "imkerei"
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

const newVideo = await prisma.videos.createMany({
    data: videoDetails
})

