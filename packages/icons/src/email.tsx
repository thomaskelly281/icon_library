import { mdiEmail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Email(props: IconComponentProps) {
  return <Icon path={mdiEmail} {...props} />;
}

export { mdiEmail as path };
