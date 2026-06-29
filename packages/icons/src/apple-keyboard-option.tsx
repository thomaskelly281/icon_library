import { mdiAppleKeyboardOption } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AppleKeyboardOption(props: IconComponentProps) {
  return <Icon path={mdiAppleKeyboardOption} {...props} />;
}

export { mdiAppleKeyboardOption as path };
