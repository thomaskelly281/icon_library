import { mdiHumanGreeting } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanGreeting(props: IconComponentProps) {
  return <Icon path={mdiHumanGreeting} {...props} />;
}

export { mdiHumanGreeting as path };
