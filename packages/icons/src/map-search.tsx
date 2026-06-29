import { mdiMapSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapSearch(props: IconComponentProps) {
  return <Icon path={mdiMapSearch} {...props} />;
}

export { mdiMapSearch as path };
