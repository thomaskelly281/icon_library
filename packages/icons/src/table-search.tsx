import { mdiTableSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableSearch(props: IconComponentProps) {
  return <Icon path={mdiTableSearch} {...props} />;
}

export { mdiTableSearch as path };
