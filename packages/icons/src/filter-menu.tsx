import { mdiFilterMenu } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterMenu(props: IconComponentProps) {
  return <Icon path={mdiFilterMenu} {...props} />;
}

export { mdiFilterMenu as path };
