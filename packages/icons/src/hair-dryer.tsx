import { mdiHairDryer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HairDryer(props: IconComponentProps) {
  return <Icon path={mdiHairDryer} {...props} />;
}

export { mdiHairDryer as path };
