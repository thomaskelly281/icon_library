import { mdiTabSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TabSearch(props: IconComponentProps) {
  return <Icon path={mdiTabSearch} {...props} />;
}

export { mdiTabSearch as path };
