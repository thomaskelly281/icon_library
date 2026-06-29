import { mdiArchiveSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveSearch(props: IconComponentProps) {
  return <Icon path={mdiArchiveSearch} {...props} />;
}

export { mdiArchiveSearch as path };
