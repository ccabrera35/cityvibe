import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`${process.env.NEXT_PUBLIC_BASE_PATH}/events/all`, request.url));
}

export const config = {
  matcher: ["/events"]
};
