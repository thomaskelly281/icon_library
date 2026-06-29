import { mdiGroup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Group(props: IconComponentProps) {
  return <Icon path={mdiGroup} {...props} />;
}

export { mdiGroup as path };
