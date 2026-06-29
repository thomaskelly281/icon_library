import { mdiFridgeIndustrial } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FridgeIndustrial(props: IconComponentProps) {
  return <Icon path={mdiFridgeIndustrial} {...props} />;
}

export { mdiFridgeIndustrial as path };
