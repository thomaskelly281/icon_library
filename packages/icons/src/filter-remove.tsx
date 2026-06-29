import { mdiFilterRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterRemove(props: IconComponentProps) {
  return <Icon path={mdiFilterRemove} {...props} />;
}

export { mdiFilterRemove as path };
