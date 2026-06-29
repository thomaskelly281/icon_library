import { mdiAppleKeyboardCaps } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AppleKeyboardCaps(props: IconComponentProps) {
  return <Icon path={mdiAppleKeyboardCaps} {...props} />;
}

export { mdiAppleKeyboardCaps as path };
