import { mdiLibrary } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Library(props: IconComponentProps) {
  return <Icon path={mdiLibrary} {...props} />;
}

export { mdiLibrary as path };
