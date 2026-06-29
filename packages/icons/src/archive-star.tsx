import { mdiArchiveStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveStar(props: IconComponentProps) {
  return <Icon path={mdiArchiveStar} {...props} />;
}

export { mdiArchiveStar as path };
