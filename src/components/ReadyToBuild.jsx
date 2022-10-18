import Button from "./Button"

function ReadyToBuild() {
  return (
    <article className="flex flex-col items-center justify-center">
        <section className="w-[90vw] mt-10 lg:w-1/2 space-y-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">
                Ready To Build Your Community?
            </h2>
            <Button text="Get Started For Free" id="btn_get_started_2" css="btn btn-primary w-1/2" />
        </section>
    </article>
  )
}

export default ReadyToBuild