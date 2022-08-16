/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from '@twind';
import ComingSoon from '../islands/ComingSoon.tsx';
import { Head } from '$fresh/runtime.ts';

const TITLE = 'piece of code - bring code pieces in my mind to reality';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <div class={tw`bg-black h-screen w-screen`}>
        <div
          class={tw`flex items-center justify-center text-white h-full w-full`}
        >
          <ComingSoon />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
