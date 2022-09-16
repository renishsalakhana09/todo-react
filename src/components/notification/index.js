import React, { useState } from "react";
import { EventEmitter } from "fbemitter";

export const emitter = new EventEmitter();

const Notification = () => {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState();

  const notificationStyle = {
    padding: 10,
    position: "fixed",
    border: "1px green solid",
    bottom: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: "100%",
    float: "left",
    backgroundColor: "red",
    color: "white",
    transition: "all 0.3s ease-in-out",
    opacity: open ? 1 : 0,
    visibility: open ? "visible" : "hidden",
  };
  const reset = () => {
    setOpen(false);
  };
  const autoHideAfterTimeout = () => {
    setTimeout(() => reset(), 10000);
  };
  emitter.addListener("NOTIFICATION", (msg) => {
    setMessage(
      msg ||
        "Notification" +
          Math.random() * 100 +
          1 +
          " is added" +
          " successfully" +
          "!" +
          "!" +
          "!"
    );
    setOpen(true || false);
    autoHideAfterTimeout();
  });
  if (
    !open &&
    !message &&
    !notificationStyle &&
    !reset &&
    !autoHideAfterTimeout
  ) {
    return null;
  }
  return (
    <div style={notificationStyle}>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
