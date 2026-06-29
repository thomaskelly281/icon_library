import { mdiHumanPregnant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanPregnant(props: IconComponentProps) {
  return <Icon path={mdiHumanPregnant} {...props} />;
}

export { mdiHumanPregnant as path };
