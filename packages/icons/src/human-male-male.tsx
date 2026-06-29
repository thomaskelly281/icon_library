import { mdiHumanMaleMale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMaleMale(props: IconComponentProps) {
  return <Icon path={mdiHumanMaleMale} {...props} />;
}

export { mdiHumanMaleMale as path };
