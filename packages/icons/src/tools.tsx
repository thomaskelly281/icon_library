import { mdiTools } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tools(props: IconComponentProps) {
  return <Icon path={mdiTools} {...props} />;
}

export { mdiTools as path };
