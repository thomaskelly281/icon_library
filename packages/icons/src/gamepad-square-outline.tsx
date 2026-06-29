import { mdiGamepadSquareOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadSquareOutline(props: IconComponentProps) {
  return <Icon path={mdiGamepadSquareOutline} {...props} />;
}

export { mdiGamepadSquareOutline as path };
