import { NextResponse } from "next/server";
import { applyRateLimiting } from "./utils/rate-limiter";

export async function middleware(request) {
    const response = NextResponse.next();

    try {
        await applyRateLimiting(request, response);
    } catch (error) {
         return new NextResponse("Too Many Request", { status: 429 });
    }

    return response;
}

export const config = {
    matcher: "/api/(.*)",
};