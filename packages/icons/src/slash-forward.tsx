import { mdiSlashForward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SlashForward(props: IconComponentProps) {
  return <Icon path={mdiSlashForward} {...props} />;
}

export { mdiSlashForward as path };
