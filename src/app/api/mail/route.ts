import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../../../service/sendEmail';

export async function GET(req : NextRequest) {

    console.log(req)
    const res = req.body;
    return NextResponse.json({req})
}

export async function POST(req : NextRequest) {
    const res = await req.json()
    
    await sendEmail(res.firstName + " " + res.lastName,
        res.email,
        res.message);

    return NextResponse.json({
        message: "success",
        status: 200
    })
}