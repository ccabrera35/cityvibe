import "server-only";
import prisma from "./db";
import { capitalize } from "./utils";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  console.log('city inside unstable', capitalize(city));
  const events = await prisma.events.findMany({
    skip: (page - 1) * 6, 
    take: 6,
    where: {
      city: city === "all" ? undefined : capitalize(city)
    },
    orderBy: {
      date: "asc"
    }
  });

  console.log('events', events);

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.events.count();
  } else {
    totalCount = await prisma.events.count({
      where: {
        city: capitalize(city)
      }
    });
  }

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.events.findUnique({
    where: {
      slug: slug
    }
  });

  if (!event) {
    return notFound();
  }

  return event;
});
