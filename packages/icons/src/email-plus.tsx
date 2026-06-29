import { mdiEmailPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailPlus(props: IconComponentProps) {
  return <Icon path={mdiEmailPlus} {...props} />;
}

export { mdiEmailPlus as path };
