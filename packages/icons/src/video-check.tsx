import { mdiVideoCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoCheck(props: IconComponentProps) {
  return <Icon path={mdiVideoCheck} {...props} />;
}

export { mdiVideoCheck as path };
