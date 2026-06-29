import { mdiUbuntu } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ubuntu(props: IconComponentProps) {
  return <Icon path={mdiUbuntu} {...props} />;
}

export { mdiUbuntu as path };
