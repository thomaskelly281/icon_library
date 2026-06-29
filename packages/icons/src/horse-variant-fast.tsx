import { mdiHorseVariantFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HorseVariantFast(props: IconComponentProps) {
  return <Icon path={mdiHorseVariantFast} {...props} />;
}

export { mdiHorseVariantFast as path };
