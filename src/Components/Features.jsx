import React from "react";

function Features() {
  return (
    <div className="feature--wrapper">
      <div className="feature--card">
        <div className="text--wrapper">
          <h3>Grow Together</h3>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <div className="svg--wrapper">
          <img src="./images/illustration-grow-together.svg" alt="together" />
        </div>
      </div>
      <div className="feature--card">
        <div className="text--wrapper">
          <h3>Flowing Conversations</h3>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow
          </p>
        </div>
        <div className="svg--wrapper">
          <img
            src="./images/illustration-flowing-conversation.svg"
            alt="together"
          />
        </div>
      </div>
      <div className="feature--card">
        <div className="text--wrapper">
          <h3>Your Users</h3>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div className="svg--wrapper">
          <img src="./images/illustration-your-users.svg" alt="together" />
        </div>
      </div>
    </div>
  );
}

export default Features;
