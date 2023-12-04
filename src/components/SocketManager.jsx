// React imports
import { useEffect } from "react";

// Socket.io-client imports
import { io } from "socket.io-client";

// Create the socket io connection
export const socket = io("http://localhost:3500");

const SocketManager = () => {
	useEffect(() => {
		const onConnect = () => {
			console.log("Connected!");
		};

		const onDisconnect = () => {
			console.log("Disconnected!");
		};

		const onHello = () => {
			console.log("Hello!");
		};

		// Add function actions to actions
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("hello", onHello);

		// Clean up (un mount)
		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onConnect);
			socket.off("hello", onConnect);
		};
	}, []);

	return <div>SocketManager</div>;
};

export default SocketManager;
