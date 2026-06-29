import { mdiVideoBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoBox(props: IconComponentProps) {
  return <Icon path={mdiVideoBox} {...props} />;
}

export { mdiVideoBox as path };
