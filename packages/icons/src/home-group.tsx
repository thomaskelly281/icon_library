import { mdiHomeGroup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeGroup(props: IconComponentProps) {
  return <Icon path={mdiHomeGroup} {...props} />;
}

export { mdiHomeGroup as path };
