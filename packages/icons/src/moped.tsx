import { mdiMoped } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Moped(props: IconComponentProps) {
  return <Icon path={mdiMoped} {...props} />;
}

export { mdiMoped as path };
