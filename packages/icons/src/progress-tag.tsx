import { mdiProgressTag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressTag(props: IconComponentProps) {
  return <Icon path={mdiProgressTag} {...props} />;
}

export { mdiProgressTag as path };
