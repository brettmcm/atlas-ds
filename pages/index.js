import Head from 'next/head'
import Card from '../components/card'

export default function Home() {
  return (
    <main className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Card type="feature" title="Money" action="3 updates" cta="Go to Money" />
      <Card type="offer" title="Credit cards" action="Advertiser disclosure" cta="View your offers" />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        
        main {
          display:flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 2em;
          width: 100vw;
          height: 100vh;
          background: #f4f4f4;
          padding: 3em;
          overflow: scroll;
        }
      `}</style>
    </main>
  )
}
