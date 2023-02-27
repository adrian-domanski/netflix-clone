import { Product } from '@stripe/firestore-stripe-payments';
import Head from 'next/head';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import Table from './Table';

interface IProps {
  products: Product[];
}

function Plans({ products }: IProps) {
  const { logout } = useAuth();

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>

      <header className='border-b border-white/10 bg-[#141414]'>
        <Link href='/'>
          <img
            src='https://rb.gy/ulxxee'
            alt='Netflix'
            width={150}
            height={90}
            className='cursor-pointer object-contain'
          />
        </Link>
        <button
          className='text-lg font-medium hover:underline'
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className='max-w-5xl pt-28 pb-12 transition-all md:px-10'>
        <h1 className='mb-3 text-3xl font-medium'>
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className='flex items-center gap-x-2 text-lg'>
            <FaCheck className='h-7 w-7 text-[#E50914]' /> Watch all you want.
            Ad-free.
          </li>
          <li className='flex items-center gap-x-2 text-lg'>
            <FaCheck className='h-7 w-7 text-[#E50914]' /> Recommendations just
            for you.
          </li>
          <li className='flex items-center gap-x-2 text-lg'>
            <FaCheck className='h-7 w-7 text-[#E50914]' /> Change or cancel your
            plan anytime.
          </li>
        </ul>

        <div className='mt-4 flex flex-col space-y-4'>
          <div className='flex w-full items-center self-end md:w-3/5'>
            {products.map((product) => (
              <div className='planBox' key={product.id}>
                {product.name}
              </div>
            ))}
          </div>

          <Table />

          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
}

export default Plans;
