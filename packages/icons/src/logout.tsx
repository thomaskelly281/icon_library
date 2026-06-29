import { mdiLogout } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Logout(props: IconComponentProps) {
  return <Icon path={mdiLogout} {...props} />;
}

export { mdiLogout as path };
