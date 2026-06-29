import { mdiChurch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Church(props: IconComponentProps) {
  return <Icon path={mdiChurch} {...props} />;
}

export { mdiChurch as path };
