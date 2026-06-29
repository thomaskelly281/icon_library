import { mdiHumanMaleBoy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMaleBoy(props: IconComponentProps) {
  return <Icon path={mdiHumanMaleBoy} {...props} />;
}

export { mdiHumanMaleBoy as path };
