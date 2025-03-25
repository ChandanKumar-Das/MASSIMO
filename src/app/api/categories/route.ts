import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()
export const GET = async() =>{

    try{
        const catagory = await prisma.category.findMany()
        return new NextResponse(JSON.stringify(catagory), {status:200})
    }catch(e){
        console.log(e)
        return new NextResponse(JSON.stringify({message:"somtjing went wrong"}), {status:500})
    }
   
}