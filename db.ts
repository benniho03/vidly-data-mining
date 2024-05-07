import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const newVideo = {
    "id": 3123,
    "title": "Jessie ist die beste wirklich ",
    "thumbnail": "https://i.ytimg.com/vi/2bkOh1gdpJ4/default.jpg",
    "description": "Minecraft, But I Can't Use The Letter O\n\n↓ ↓ ↓ FOLLOW ME EVERYWHERE ↓ ↓ ↓\n► LIKELY STREAMED LIVE ON TWITCH: https://www.twitch.tv/camman18​\n► 2ND YOUTUBE CHANNEL: https://www.youtube.com/c/camman18​VODS\n► MY DISCORD: https://discord.gg/45tvHdhUPA\n► TWITTER: https://twitter.com/camman18_\n\n\n\ncamman18 does another Minecraft challenge, a Minecraft, But challenge, but not Minecraft, But You Can't Touch Grass, Minecraft But You Can't Touch The Color Blue, Minecraft, But You Can't Touch Sand, Minecraft But You Can't Touch The Color Green, or any of his other Minecraft 1.17 challenges in 2021!\n\nToday camman18 plays not Minecraft, But Water Rises or Minecraft, But Lava Rises, or any other Minecraft but challenge like that, but Minecraft short from camman18! It was HILARIOUS. #camman18​ #shorts​ #tiktok​ #short​ #Minecraft​\n\nThis Minecraft but challenge makes the funniest Minecraft videos without any funny Minecraft mods! Somehow this is the NEW funniest Minecraft video / tiktok / short ever! Instead of any other Minecraft challenge in Minecraft 1.16.5, this is a Minecraft video in Minecraft 1.17 in 2021 (almost 2022)!\n\nThe goal was to try to inform / speed run / speed runner of Minecraft against a killer / assassin but it is me, camman18 from twitch / tiktok / twitter , playing Minecraft Java 1.17.1 and not Minecraft Bedrock.\n\nTHIS IS THE GREATEST SHORT EVER!!!!!",
    "channel": "camman18",
    "likeCount": 2651200,
    "commentCount": 14421,
    "viewCount": 59835357,
    "duration": "PT1M",
    "publishedAt": "2021-09-28T15:00:03Z",
    "caption": "false",
    "tags": [
        "camman18",
        "camman18 minecraft",
        "minecraft",
        "minecraft manhunt",
        "minecraft hitmen",
        "minecraft speedrun",
        "speedrunner vs",
        "minecraft but",
        "minecraft but i cant touch grass",
        "minecraft but challenge",
        "minecraft challenge",
        "challenge",
        "beating minecraft",
        "camman18 minecraft youtube",
        "mine craft",
        "funny",
        "minecraft mod",
        "camman18 tiktok",
        "tiktok camman18",
        "camman18 twitch",
        "minecraft speedrunner",
        "camman18 clips",
        "camman18 shorts",
        "minecraft 1.17",
        "minecraft but you cant touch the color"
    ],
    "topicCategories": [
        "https://en.wikipedia.org/wiki/Action-adventure_game",
        "https://en.wikipedia.org/wiki/Action_game",
        "https://en.wikipedia.org/wiki/Role-playing_video_game",
        "https://en.wikipedia.org/wiki/Video_game_culture"
    ],
    "language": "en-US"
}
export async function postVideos(video: (Prisma.Without<Prisma.videosCreateInput, Prisma.videosUncheckedCreateInput> & Prisma.videosUncheckedCreateInput) | (Prisma.Without<Prisma.videosUncheckedCreateInput, Prisma.videosCreateInput> & Prisma.videosCreateInput)) {
    const newVideo = await prisma.videos.create({
        data: video
    })
}

//console.log("Created video", { video })
//const getVideos = await prisma.videos.findMany()

// prisma.$disconnect()