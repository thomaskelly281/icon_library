import { mdiSelectSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectSearch(props: IconComponentProps) {
  return <Icon path={mdiSelectSearch} {...props} />;
}

export { mdiSelectSearch as path };
