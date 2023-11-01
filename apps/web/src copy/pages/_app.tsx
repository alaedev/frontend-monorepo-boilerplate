import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Version } from 'ui-tailwind';
import { getVersionInfo } from 'utils-version';



const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Frontend Monorepo Boilerplate - App (MUI)</title>
        <meta name="description" content="Monorepo Boilerplate - App (MUI)." />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-5 mt-3 text-center">
        <div className="text-lg font-medium">Monorepo Boilerplate - App (Tailwind)</div>
        
      </div>
      {<Component {...pageProps} />}
    </>
  );
};

export default App;