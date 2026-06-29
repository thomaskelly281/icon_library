import { mdiGamepadRoundOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadRoundOutline(props: IconComponentProps) {
  return <Icon path={mdiGamepadRoundOutline} {...props} />;
}

export { mdiGamepadRoundOutline as path };
