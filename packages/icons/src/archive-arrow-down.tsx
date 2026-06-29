import { mdiArchiveArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveArrowDown(props: IconComponentProps) {
  return <Icon path={mdiArchiveArrowDown} {...props} />;
}

export { mdiArchiveArrowDown as path };
