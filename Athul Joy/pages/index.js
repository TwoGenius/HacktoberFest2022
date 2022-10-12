import 'tailwindcss/tailwind.css'

import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Head>
        <title> Athul Joy </title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        html,
        body {
          font-family: 'Noto Sans JP', sans-serif;
        }
      `}</style>

      <main className="container mx-auto text-white">
        <div className="flex flex-row items-center h-screen">
          <div className="md:w-2/3 w-screen px-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-relaxed">
              Athul Joy
            </h1>
            <h3 className="text-3xl md:text-4xl font-bold leading-relaxed">
              Backend Developer, <br />@ Lightrains Technolabs Pvt Ltd
            </h3>
            <a
              className="mt-8 inline-block hover:text-green-500"
              href="mailto:a.athuljoy@gmail.com">
              a.athuljoy@gmail.com
            </a>

            <div className="mt-2">
              <a
                className="inline-block mr-2 hover:text-green-500"
                href="https://github.com/iathul">
                github
              </a>
              <a
                className="inline-block hover:text-green-500"
                href="https://www.linkedin.com/in/athul-joy/">
                linkedin
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
