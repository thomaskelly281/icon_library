import { mdiDesktopClassic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DesktopClassic(props: IconComponentProps) {
  return <Icon path={mdiDesktopClassic} {...props} />;
}

export { mdiDesktopClassic as path };
