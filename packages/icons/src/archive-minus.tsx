import { mdiArchiveMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveMinus(props: IconComponentProps) {
  return <Icon path={mdiArchiveMinus} {...props} />;
}

export { mdiArchiveMinus as path };
