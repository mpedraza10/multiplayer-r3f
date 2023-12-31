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

// Three improts
import * as THREE from "three";

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
					id={character.id}
					key={character.id}
					position={
						new THREE.Vector3(
							character.position[0],
							character.position[1],
							character.position[2]
						)
					}
					hairColor={character.hairColor}
					topColor={character.topColor}
					bottomColor={character.bottomColor}
				/>
			))}
		</>
	);
};
