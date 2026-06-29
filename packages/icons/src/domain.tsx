import { mdiDomain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Domain(props: IconComponentProps) {
  return <Icon path={mdiDomain} {...props} />;
}

export { mdiDomain as path };
