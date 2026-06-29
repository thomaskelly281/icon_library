import { mdiTag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tag(props: IconComponentProps) {
  return <Icon path={mdiTag} {...props} />;
}

export { mdiTag as path };
