import { mdiHorseHuman } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HorseHuman(props: IconComponentProps) {
  return <Icon path={mdiHorseHuman} {...props} />;
}

export { mdiHorseHuman as path };
