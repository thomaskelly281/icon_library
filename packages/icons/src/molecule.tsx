import { mdiMolecule } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Molecule(props: IconComponentProps) {
  return <Icon path={mdiMolecule} {...props} />;
}

export { mdiMolecule as path };
