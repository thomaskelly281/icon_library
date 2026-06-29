import { mdiCarSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSearch(props: IconComponentProps) {
  return <Icon path={mdiCarSearch} {...props} />;
}

export { mdiCarSearch as path };
