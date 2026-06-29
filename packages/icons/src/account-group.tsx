import { mdiAccountGroup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountGroup(props: IconComponentProps) {
  return <Icon path={mdiAccountGroup} {...props} />;
}

export { mdiAccountGroup as path };
