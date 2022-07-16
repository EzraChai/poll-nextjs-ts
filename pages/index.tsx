import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['hello', { text: 'client' }]);

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className="text-4xl font-bold text-center py-6">Which pokemon is Rounder?</div>
      <div className="border rounded-lg p-8 flex justify-evenly items-center min-w-[20rem] max-w-4xl">
        <div className="w-16 h-16 bg-red-200"></div>
        <div className="font-bold text-xl">VS</div>
        <div className="w-16 h-16 bg-pink-200"></div>
        <div className="">{hello.data?.greeting}</div>
        
      </div>
    </div>
  )
}

export default Home
