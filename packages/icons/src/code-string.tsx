import { mdiCodeString } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeString(props: IconComponentProps) {
  return <Icon path={mdiCodeString} {...props} />;
}

export { mdiCodeString as path };
