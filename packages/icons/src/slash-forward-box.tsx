import { mdiSlashForwardBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SlashForwardBox(props: IconComponentProps) {
  return <Icon path={mdiSlashForwardBox} {...props} />;
}

export { mdiSlashForwardBox as path };
