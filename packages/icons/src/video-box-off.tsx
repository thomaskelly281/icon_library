import { mdiVideoBoxOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoBoxOff(props: IconComponentProps) {
  return <Icon path={mdiVideoBoxOff} {...props} />;
}

export { mdiVideoBoxOff as path };
