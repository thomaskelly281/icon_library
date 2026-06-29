import { mdiFileSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSearch(props: IconComponentProps) {
  return <Icon path={mdiFileSearch} {...props} />;
}

export { mdiFileSearch as path };
