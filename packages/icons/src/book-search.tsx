import { mdiBookSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookSearch(props: IconComponentProps) {
  return <Icon path={mdiBookSearch} {...props} />;
}

export { mdiBookSearch as path };
