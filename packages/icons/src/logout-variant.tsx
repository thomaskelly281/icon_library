import { mdiLogoutVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LogoutVariant(props: IconComponentProps) {
  return <Icon path={mdiLogoutVariant} {...props} />;
}

export { mdiLogoutVariant as path };
