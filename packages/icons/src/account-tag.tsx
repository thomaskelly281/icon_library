import { mdiAccountTag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountTag(props: IconComponentProps) {
  return <Icon path={mdiAccountTag} {...props} />;
}

export { mdiAccountTag as path };
