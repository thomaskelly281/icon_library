import { mdiGridLarge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GridLarge(props: IconComponentProps) {
  return <Icon path={mdiGridLarge} {...props} />;
}

export { mdiGridLarge as path };
