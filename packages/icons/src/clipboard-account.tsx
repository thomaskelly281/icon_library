import { mdiClipboardAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardAccount(props: IconComponentProps) {
  return <Icon path={mdiClipboardAccount} {...props} />;
}

export { mdiClipboardAccount as path };
