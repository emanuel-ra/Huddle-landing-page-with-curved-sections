import banner_top_desktop from '../assets/bg-section-top-desktop-1.svg';
import banner_bottom_desktop from '../assets/bg-section-bottom-desktop-1.svg';

import banner_top_mobile from '../assets/bg-section-top-desktop-1.svg';
import banner_bottom_mobile from '../assets/bg-section-bottom-desktop-1.svg';
import illustration from '../assets/illustration-grow-together.svg';

function GrowTogether() {
  return (
    <article className="banner">
      <picture>
        <source srcSet={banner_top_mobile} media="(min-width: 375px)" />
        <img src={banner_top_desktop} alt="" />
      </picture>

      <section className='banner-body'>
        <article className='w-1/2 grid grid-cols-1 lg:grid-cols-2 space-x-10'>
          
          <section className='order-2 lg:order-1 flex flex-col justify-center items-center'>
            <h3>Grow Together</h3>
            <blockquote>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </blockquote>
          </section>

          <section className='order-1 lg:order-2'>
            <img src={illustration} alt="illustration-grow-together" />
          </section>

        </article>
      </section>
      <picture>

      <source srcSet={banner_bottom_mobile} media="(min-width: 375px)" />
        <img src={banner_bottom_desktop} alt="" />
      </picture>
    </article>
  )
}

export default GrowTogether