import { NextResponse } from "next/server";
import { applyRateLimit } from "./utils/rate-limiter";

export async function middleware(request) {
    const response = NextResponse.next();

    try {
        await applyRateLimit(request, response);
    } catch (error) {
        console.log(error);
        return new NextResponse("Too Many Request", { status: 429 });
    }

    return response;
}

export const config = {
    matcher: "/api/(.*)",
};