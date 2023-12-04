import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

import { HoodieCharacter } from "./HoodieCharacter";

export const Experience = () => {
	return (
		<>
			<Environment preset="sunset" />
			<ambientLight intensity={0.3} />
			<ContactShadows blur={2} />
			<OrbitControls />
			<HoodieCharacter />
			<HoodieCharacter position-x={1} hairColor="red" topColor="blue" />
		</>
	);
};
