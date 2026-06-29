import { mdiTelescope } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Telescope(props: IconComponentProps) {
  return <Icon path={mdiTelescope} {...props} />;
}

export { mdiTelescope as path };
