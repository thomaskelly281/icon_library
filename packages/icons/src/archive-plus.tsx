import { mdiArchivePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchivePlus(props: IconComponentProps) {
  return <Icon path={mdiArchivePlus} {...props} />;
}

export { mdiArchivePlus as path };
