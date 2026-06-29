import { mdiLinux } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Linux(props: IconComponentProps) {
  return <Icon path={mdiLinux} {...props} />;
}

export { mdiLinux as path };
