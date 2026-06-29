import { mdiFridgeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FridgeOutline(props: IconComponentProps) {
  return <Icon path={mdiFridgeOutline} {...props} />;
}

export { mdiFridgeOutline as path };
