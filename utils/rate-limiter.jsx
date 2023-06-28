import rateLimit from "express-rate-limit"
import SlowDown from "express-slow-down"

const applyMiddleware = (middleware) => (request, response) =>
    new Promise((resolve, reject) => {
        middleware(request, response, (result) =>
            result instanceof Error ? reject(result) : resolve(result)
        );
    });

const getIP = (request) =>
    request.headers["x-forwarded-for"] ||
    request.headers["x-real-ip"] ||
    request.connection.remoteAddress;

export const getRateLimitMiddlewares = () => {
    const max = 3000000000;
    const windowMs = 24 * 60 * 60 * 1000;
    const keyGenerator = getIP;

    return [
        SlowDown({ keyGenerator, windowMs }),
        rateLimit({ keyGenerator, windowMs, max })
    ]
};

const middlewares = getRateLimitMiddlewares();

export const   applyRateLimiting = async(request, response) => {
    await Promise.all(
        middlewares
            .map(applyMiddleware)
            .map((middleware) => middleware(request, response))
    );
}

