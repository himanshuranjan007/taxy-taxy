// import { NextResponse } from "next/server"

// const sharedResults: Record<string, any> = {}

// export async function POST(request: Request) {
//   const data = await request.json()
//   const id = Math.random().toString(36).substr(2, 9)
//   sharedResults[id] = data
//   return NextResponse.json({ id })
// }

// export async function GET(request: Request) {
//   const url = new URL(request.url)
//   const id = url.searchParams.get("id")
//   if (id && sharedResults[id]) {
//     return NextResponse.json(sharedResults[id])
//   }
//   return NextResponse.json({ error: "Not found" }, { status: 404 })
// }

