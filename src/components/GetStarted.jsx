import Button from "./button"
import img from '../assets/screen-mockups.svg'
import img_communities from '../assets/icon-communities.svg'
import img_messages from '../assets/icon-messages.svg'

function GetStarted() {
  return (
    <article className="flex flex-col items-center justify-center">
        
        <section className="w-[90vw] mt-10 lg:w-1/2 space-y-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">Build The Community Your Fans Will Love</h2>
            <blockquote className="lg:px-32">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</blockquote>
            <Button text="Get Started For Free" id="btn_get_started" css="btn btn-primary w-1/3" />
        </section>
        <section className="mt-24 p-5">
            <img src={img} className="w-full" alt="screen-mockups" />
        </section>

        <section className="w-1/2 mt-24 flex-col space-y-24 lg:space-y-0 flex lg:flex-row lg:justify-between">
            <article className="box-counter">
                <img src={img_communities} alt="icon communities" />
                <h3 className="text-6xl font-bold">1.4k+</h3>
                <p className="text-slate-400">Communities Formed</p>
            </article>
            <article className="box-counter">
                <img src={img_messages} alt="icon messages" />
                <h3 className="text-6xl font-bold">2.7m+</h3>
                <p className="text-slate-400">Messages Sent</p>
            </article>
        </section>
        
    </article>    
  )
} 

export default GetStarted