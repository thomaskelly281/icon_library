import { mdiTagSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagSearch(props: IconComponentProps) {
  return <Icon path={mdiTagSearch} {...props} />;
}

export { mdiTagSearch as path };
