import { mdiOrigin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Origin(props: IconComponentProps) {
  return <Icon path={mdiOrigin} {...props} />;
}

export { mdiOrigin as path };
