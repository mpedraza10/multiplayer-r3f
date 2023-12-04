// React imports
import { useEffect } from "react";

// Socket.io-client imports
import { io } from "socket.io-client";

// Jotai imports
import { atom, useAtom } from "jotai";

// Create the socket io connection
export const socket = io("http://localhost:3500");

// Global state for characters
export const charactersAtom = atom([]);

const SocketManager = () => {
	// State
	const [characters, setCharacters] = useAtom(charactersAtom);

	// Effect for socket connection
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

		const onCharacters = (value) => {
			setCharacters(value);
		};

		// Add function actions to actions
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("hello", onHello);
		socket.on("characters", onCharacters);

		// Clean up (un mount)
		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onConnect);
			socket.off("hello", onConnect);
			socket.off("characters", onCharacters);
		};
	}, []);
};

export default SocketManager;
