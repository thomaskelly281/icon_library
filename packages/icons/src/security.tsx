import { mdiSecurity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Security(props: IconComponentProps) {
  return <Icon path={mdiSecurity} {...props} />;
}

export { mdiSecurity as path };
