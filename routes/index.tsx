/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import ComingSoon from '../islands/ComingSoon.tsx';

const Home = () => {
  return (
    <div class={tw`bg-black h-screen w-screen`}>
      <div
        class={tw`flex items-center justify-center text-white h-full w-full`}
      >
        <ComingSoon />
      </div>
    </div>
  );
};

export default Home;
