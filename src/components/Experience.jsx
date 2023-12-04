// React three drei imports
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

// Jotai imports
import { useAtom } from "jotai";

// Components
import { HoodieCharacter } from "./HoodieCharacter";

// Characters state
import { charactersAtom } from "./SocketManager";

export const Experience = () => {
	// State
	const [characters] = useAtom(charactersAtom);

	return (
		<>
			<Environment preset="sunset" />
			<ambientLight intensity={0.3} />
			<ContactShadows blur={2} />
			<OrbitControls />
			<mesh rotation-x={-Math.PI / 2} position-y={-0.001}>
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
