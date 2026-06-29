import { mdiGamepadCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiGamepadCircleOutline} {...props} />;
}

export { mdiGamepadCircleOutline as path };
