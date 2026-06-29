import { mdiArchiveCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveCog(props: IconComponentProps) {
  return <Icon path={mdiArchiveCog} {...props} />;
}

export { mdiArchiveCog as path };
