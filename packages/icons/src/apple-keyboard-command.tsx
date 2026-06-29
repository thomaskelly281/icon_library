import { mdiAppleKeyboardCommand } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AppleKeyboardCommand(props: IconComponentProps) {
  return <Icon path={mdiAppleKeyboardCommand} {...props} />;
}

export { mdiAppleKeyboardCommand as path };
