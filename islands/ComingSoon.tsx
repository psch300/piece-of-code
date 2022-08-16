/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { animation, css } from 'twind/css';

const ComingSoon = () => {
  const text = 'COMING SOON 22.09.30 '.repeat(2);
  const [panelWidth, panelHeight] = [11.2, 64];

  return (
    <div
      class={tw`${
        css({
          perspective: '1000px',
          perspectiveOrigin: '50% calc(50% - 600px)',
          transform: 'rotate(30deg)',
        })
      }`}
    >
      <div
        class={tw`${css({ display: 'flex', transformStyle: 'preserve-3d' })} ${rotate}`}
      >
        {Array(64).fill(0).map((_, i) => (
          <div
            key={i}
            class={tw`absolute w-[${panelWidth}px] h-[${panelHeight}px] overflow-hidden ${
              css({
                transform: `translate(-50%, -50%) rotateY(${360 * i / 64}deg) translateZ(110px)`,
              })
            }`}
          >
            <div
              class={tw`absolute w-max text-3xl font-bold text-orange-500 left-[${-panelWidth * i}px]`}
            >
              {text}
            </div>
          </div>
        ))}
      </div>
      <div
        class={tw`${css({ display: 'flex', transformStyle: 'preserve-3d' })}`}
      >
        {Array(64).fill(0).map((_, i) => (
          <div
            key={i}
            class={tw`absolute w-[${panelWidth}px] h-[${panelHeight}px] overflow-hidden ${
              css({
                transform: `translate(-50%, -100%) rotateY(${100 + 360 * i / 64}deg) translateZ(110px)`,
              })
            }`}
          >
            <div
              class={tw`flex items-end absolute w-max h-8 left-[${-panelWidth * i}px]`}
            >
              <div class={tw`text-xs font-bold`}>piece of code</div>
              <img src='/logo.svg' class={tw`w-8 h-8 mx-1`} />
              <div class={tw`text-xs font-bold`}>bring code pieces in mind to reality</div>
            </div>
          </div>
        ))}
      </div>
      <div
        class={tw`${css({ display: 'flex', transformStyle: 'preserve-3d' })}`}
      >
        {Array(64).fill(0).map((_, i) => (
          <div
            key={i}
            class={tw`absolute w-[${panelWidth}px] h-[${panelHeight}px] overflow-hidden ${
              css({
                transform: `translate(-50%, 0%) rotateY(${280 + 360 * i / 64}deg) translateZ(110px)`,
              })
            }`}
          >
            <div
              class={tw`flex items-start absolute w-max h-8 left-[${-panelWidth * i}px]`}
            >
              <div class={tw`text-xs font-bold`}>piece of code</div>
              <img src='/logo.svg' class={tw`w-8 h-8 mx-1`} />
              <div class={tw`text-xs font-bold`}>bring code pieces in mind to reality</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const rotate = animation('30s linear infinite', {
  'to': {
    transform: 'rotateY(-360deg)',
  },
});

export default ComingSoon;
