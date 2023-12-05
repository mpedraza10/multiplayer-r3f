// React imports
import { useRef, useState } from "react";

// Framer motion imports
import { motion } from "framer-motion";

// Socket import
import { socket } from "../SocketManager";

// Styles
import "./UI.css";

export const UI = () => {
	const ref = useRef();
	const [chatMessage, setChatMessage] = useState("");

	// Function to send the chat message
	const sendChatMessage = () => {
		if (chatMessage.length > 0) {
			socket.emit("chatMessage", chatMessage);
			setChatMessage("");
		}
	};

	return (
		<>
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<div className="ui-container">
					<div className="chat-container">
						<input
							type="text"
							className="chat-input"
							placeholder="Message..."
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									sendChatMessage();
								}
							}}
							value={chatMessage}
							onChange={(e) => setChatMessage(e.target.value)}
						/>
						<button className="chat-send-btn" onClick={sendChatMessage}>
							Send
						</button>
					</div>
				</div>
			</motion.div>
		</>
	);
};
