// React imports
import { useState } from "react";

// React three drei imports
import {
	ContactShadows,
	Environment,
	OrbitControls,
	useCursor,
} from "@react-three/drei";

// Jotai imports
import { useAtom } from "jotai";

// Components
import { HoodieCharacter } from "./HoodieCharacter";

// Characters state
import { charactersAtom, socket } from "./SocketManager";

export const Experience = () => {
	// State
	const [characters] = useAtom(charactersAtom);
	const [onFloor, setOnFloor] = useState(false);
	useCursor(onFloor); // Check when we hover floor to change cursor

	return (
		<>
			<Environment preset="sunset" />
			<ambientLight intensity={0.3} />
			<ContactShadows blur={2} />
			<OrbitControls />
			<mesh
				rotation-x={-Math.PI / 2}
				position-y={-0.001}
				onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
				onPointerEnter={() => setOnFloor(true)}
				onPointerLeave={() => setOnFloor(false)}
			>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial color="#f0f0f0" />
			</mesh>
			{characters.map((character) => (
				<HoodieCharacter
					key={character.id}
					position={character.position}
					hairColor={character.hairColor}
					topColor={character.topColor}
					bottomColor={character.bottomColor}
				/>
			))}
		</>
	);
};
