import { mdiHumanFemaleBoy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanFemaleBoy(props: IconComponentProps) {
  return <Icon path={mdiHumanFemaleBoy} {...props} />;
}

export { mdiHumanFemaleBoy as path };
