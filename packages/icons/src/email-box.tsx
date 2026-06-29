import { mdiEmailBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailBox(props: IconComponentProps) {
  return <Icon path={mdiEmailBox} {...props} />;
}

export { mdiEmailBox as path };
