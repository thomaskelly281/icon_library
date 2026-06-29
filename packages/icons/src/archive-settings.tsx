import { mdiArchiveSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveSettings(props: IconComponentProps) {
  return <Icon path={mdiArchiveSettings} {...props} />;
}

export { mdiArchiveSettings as path };
