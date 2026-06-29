import { mdiTextSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextSearch(props: IconComponentProps) {
  return <Icon path={mdiTextSearch} {...props} />;
}

export { mdiTextSearch as path };
