import { getProducts, Product } from '@stripe/firestore-stripe-payments';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import Banner from '../components/Banner';
import Header from '../components/Header';
import NetflixModal from '../components/Modal';
import Plans from '../components/Plans';
import Row from '../components/Row';
import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';
import payments from '../lib/stripe';
import { IMovie } from '../typings';
import requests from '../utils/requests';

interface Props {
  netflixOriginals: IMovie[];
  trendingNow: IMovie[];
  topRated: IMovie[];
  actionMovies: IMovie[];
  comedyMovies: IMovie[];
  horrorMovies: IMovie[];
  romanceMovies: IMovie[];
  documentaries: IMovie[];
  products: Product[];
}

const Home: React.FC<Props> = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  products,
}) => {
  const { loading, user } = useAuth();
  const showModal = useRecoilValue(modalState);
  const subscription = useSubscription(user);

  if (loading || subscription === null) return null;

  if (!subscription) return <Plans products={products} />;

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] ${
        showModal && `!h-screen overflow-hidden`
      }`}
    >
      <Head>
        <title>Home - Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginals} />
        <section className='md:space-y-24'>
          <Row title='Trending Now' movies={trendingNow} />
          <Row title='Top Rated' movies={topRated} />
          <Row title='Action Thrillers' movies={actionMovies} />

          <Row title='Comedies' movies={comedyMovies} />
          <Row title='Scary Movies' movies={horrorMovies} />
          <Row title='Romance Movies' movies={romanceMovies} />
          <Row title='Documentaries' movies={documentaries} />
          <Row title='Trending Now' movies={trendingNow} />
        </section>
      </main>

      {showModal && <NetflixModal />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((err) => console.log(err.message));

  const [
    netflixOriginals,
    actionMovies,
    comedyMovies,
    documentaries,
    horrorMovies,
    romanceMovies,
    topRated,
    trendingNow,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      products,
    },
  };
};
