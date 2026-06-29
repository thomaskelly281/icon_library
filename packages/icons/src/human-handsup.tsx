import { mdiHumanHandsup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanHandsup(props: IconComponentProps) {
  return <Icon path={mdiHumanHandsup} {...props} />;
}

export { mdiHumanHandsup as path };
