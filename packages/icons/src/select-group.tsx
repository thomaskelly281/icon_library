import { mdiSelectGroup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectGroup(props: IconComponentProps) {
  return <Icon path={mdiSelectGroup} {...props} />;
}

export { mdiSelectGroup as path };
