import { mdiHumanGreetingVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanGreetingVariant(props: IconComponentProps) {
  return <Icon path={mdiHumanGreetingVariant} {...props} />;
}

export { mdiHumanGreetingVariant as path };
