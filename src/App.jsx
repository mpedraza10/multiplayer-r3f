// React three fiber imports
import { Canvas } from "@react-three/fiber";

// Components
import { UI } from "./components/UI/UI";
import { Experience } from "./components/Experience";
import SocketManager from "./components/SocketManager";

function App() {
	return (
		<>
			<SocketManager />
			<Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
				<color attach="background" args={["#ececec"]} />
				<Experience />
			</Canvas>
			<UI />
		</>
	);
}

export default App;
