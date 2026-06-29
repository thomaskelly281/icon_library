import { mdiSoccer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Soccer(props: IconComponentProps) {
  return <Icon path={mdiSoccer} {...props} />;
}

export { mdiSoccer as path };
