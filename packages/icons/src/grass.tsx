import { mdiGrass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Grass(props: IconComponentProps) {
  return <Icon path={mdiGrass} {...props} />;
}

export { mdiGrass as path };
