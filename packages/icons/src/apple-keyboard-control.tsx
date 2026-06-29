import { mdiAppleKeyboardControl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AppleKeyboardControl(props: IconComponentProps) {
  return <Icon path={mdiAppleKeyboardControl} {...props} />;
}

export { mdiAppleKeyboardControl as path };
