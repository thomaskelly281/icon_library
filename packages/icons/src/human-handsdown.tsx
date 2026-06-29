import { mdiHumanHandsdown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanHandsdown(props: IconComponentProps) {
  return <Icon path={mdiHumanHandsdown} {...props} />;
}

export { mdiHumanHandsdown as path };
