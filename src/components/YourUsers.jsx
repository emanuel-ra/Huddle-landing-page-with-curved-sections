import banner_top_desktop from '../assets/bg-section-top-desktop-2.svg';
import banner_bottom_desktop from '../assets/bg-section-bottom-desktop-2.svg';

import banner_top_mobile from '../assets/bg-section-top-desktop-2.svg';
import banner_bottom_mobile from '../assets/bg-section-bottom-desktop-2.svg';

import illustration from '../assets/illustration-your-users.svg';

function YourUsers() {
  return (
    <article className="mt-44">
      <picture>
        <source srcSet={banner_top_mobile} media="(min-width: 375px)" />
        <img src={banner_top_desktop} alt="" />
      </picture>

      <section className='banner-body'>
        <article className='w-[90%] grid grid-cols-1 lg:grid-cols-2 space-x-10'>          
          <section className='order-2 lg:order-1 flex flex-col justify-center items-start space-y-5  px-12'>
            <h3 className='text-3xl font-bold'>Your Users</h3>
            <blockquote className='text-lg'>
                It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to youur app, your users can start chatting immediately.
            </blockquote>
          </section>          
          <img src={illustration} className="order-1 lg:order-2" alt="illustration-grow-together" />
        </article>
      </section>
      <picture>

      <source srcSet={banner_bottom_mobile} media="(min-width: 375px)" />
        <img src={banner_bottom_desktop} alt="" />
      </picture>
    </article>
  )
}

export default YourUsers