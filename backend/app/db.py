from prisma import Prisma

db = Prisma()

async def main():
    await db.connect()
    users = await db.user.find_many()
    print(users)
    await db.disconnect()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
