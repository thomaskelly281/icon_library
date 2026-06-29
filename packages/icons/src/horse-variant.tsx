import { mdiHorseVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HorseVariant(props: IconComponentProps) {
  return <Icon path={mdiHorseVariant} {...props} />;
}

export { mdiHorseVariant as path };
