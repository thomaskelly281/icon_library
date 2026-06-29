import { mdiClipboardFile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardFile(props: IconComponentProps) {
  return <Icon path={mdiClipboardFile} {...props} />;
}

export { mdiClipboardFile as path };
