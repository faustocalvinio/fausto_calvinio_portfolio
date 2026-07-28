---
title: "useSocket hook + SocketProvider in React"
slug: use-socket-hook
excerpt: "useSocket hook + SocketProvider in React"
publishedAt: '2024-02-29'
status: published
tags: []
cover: null
---


custom React hook (useSocket) for managing a WebSocket connection and a context provider (SocketProvider) that provides the socket connection and online status to its descendants in the component tree.

### src/hooks/useSocket.js file

```js
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (serverPath) => {
   const [online, setOnline] = useState(false);

   const socket = useMemo(
      () =>
         io.connect(serverPath, {
            transports: ["websocket"],
         }),
      [serverPath]
   );

   useEffect(() => {
      setOnline(socket.connected);
   }, [socket]);

   useEffect(() => {
      socket.on("connect", () => {
         setOnline(true);
      });
   }, [socket]);

   useEffect(() => {
      socket.on("disconnect", () => {
         setOnline(false);
      });
   }, [socket]);

   return {
      socket,
      online,
   };
};
```

### src/context/SocketProvider.jsx file

```jsx
import { createContext } from "react";
import { useSocket } from "../hooks";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
   const { socket, online } = useSocket("http://localhost:8080/");

   return (
      <SocketContext.Provider value={{ online, socket }}>
         {children}
      </SocketContext.Provider>
   );
};
```

### Usage

```jsx
const { socket, online } = useContext(SocketContext);
```

