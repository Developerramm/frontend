import React, { useLayoutEffect, useRef } from "react";

const Chat = () => {
  let chatRef = useRef(null);

  useLayoutEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, []);
  return (
    <div
      ref={chatRef}
      style={{ height: "150px", border: "1px solid #ccc", overflowY: "scroll" }}
    >
      <h3>chat box </h3>
      <p>Hello</p>
      <p>how are you</p>
      <p>Welcome to chat box</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Chat;
