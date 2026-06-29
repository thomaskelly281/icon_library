import { mdiArchiveArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveArrowUp(props: IconComponentProps) {
  return <Icon path={mdiArchiveArrowUp} {...props} />;
}

export { mdiArchiveArrowUp as path };
