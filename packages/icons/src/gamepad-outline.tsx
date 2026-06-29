import { mdiGamepadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadOutline(props: IconComponentProps) {
  return <Icon path={mdiGamepadOutline} {...props} />;
}

export { mdiGamepadOutline as path };
