import { mdiAccountSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSearch(props: IconComponentProps) {
  return <Icon path={mdiAccountSearch} {...props} />;
}

export { mdiAccountSearch as path };
