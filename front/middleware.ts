import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const middleware = (request: NextRequest) => {
    const token = request.cookies.get('contatos.token')
    const url = request.url

    if (!token && (url.includes('/contacts') || url.includes('/dashboard') || url.includes('/principal'))) {
        return NextResponse.redirect(new URL('/', url))
    }
}

const config = { matcher: ['/', 'principal', 'contacts', 'dashboard'] }

export { middleware, config }