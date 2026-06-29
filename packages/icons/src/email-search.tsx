import { mdiEmailSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailSearch(props: IconComponentProps) {
  return <Icon path={mdiEmailSearch} {...props} />;
}

export { mdiEmailSearch as path };
