import { mdiChemicalWeapon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChemicalWeapon(props: IconComponentProps) {
  return <Icon path={mdiChemicalWeapon} {...props} />;
}

export { mdiChemicalWeapon as path };
