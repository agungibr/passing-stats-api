import { serve } from "bun";

serve({
    port: 8080,
    fetch(req) {
        if (req.url.endsWith("/data.json")) {
            return new Response(Bun.file("passing_stats.json"), {
                headers: { "Content-Type": "application/json" },
            });
        }
        return new Response("Not Found", { status: 404 });
    },
});

console.log("Server running on http://localhost:8080");
