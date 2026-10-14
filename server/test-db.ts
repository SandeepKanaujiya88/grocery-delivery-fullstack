
import { prisma } from "./config/prisma.js";

async function testDB() {
    try {
        await prisma.user.findUnique({
            where: { email: "connection-test@example.com" }
        });

        console.log("DB query successful");
    } catch (error) {
        console.error("DB query failed:", error);
    } finally {
        await prisma.$disconnect();
    }
}

testDB();