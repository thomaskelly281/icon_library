import { mdiCharitySearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CharitySearch(props: IconComponentProps) {
  return <Icon path={mdiCharitySearch} {...props} />;
}

export { mdiCharitySearch as path };
