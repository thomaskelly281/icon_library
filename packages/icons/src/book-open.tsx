import { mdiBookOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookOpen(props: IconComponentProps) {
  return <Icon path={mdiBookOpen} {...props} />;
}

export { mdiBookOpen as path };
