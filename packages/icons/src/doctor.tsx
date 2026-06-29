import { mdiDoctor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Doctor(props: IconComponentProps) {
  return <Icon path={mdiDoctor} {...props} />;
}

export { mdiDoctor as path };
