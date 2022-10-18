import illustration from "../assets/illustration-flowing-conversation.svg";

function FlowingConversations() {
  return (
    <article className="mt-44">
      <section className="flex justify-center">
        <article className="w-[90%] grid grid-cols-1 lg:grid-cols-2 space-x-10">
          <img src={illustration} alt="illustration-grow-together" />
          <section className="flex flex-col justify-center items-start space-y-5  px-12">
            <h3 className="text-3xl font-bold">Flowing Conversations</h3>
            <blockquote className="text-lg">
              You wouldn't paginate a conversation in real life, so why do it online?
              Our threads have just-in-time loading for a more natural flow.
            </blockquote>
          </section>
        </article>
      </section>
    </article>
  );
}

export default FlowingConversations;
