import { mdiHumanGreetingProximity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanGreetingProximity(props: IconComponentProps) {
  return <Icon path={mdiHumanGreetingProximity} {...props} />;
}

export { mdiHumanGreetingProximity as path };
