import { mdiCardSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardSearch(props: IconComponentProps) {
  return <Icon path={mdiCardSearch} {...props} />;
}

export { mdiCardSearch as path };
