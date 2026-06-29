import { mdiCodeJson } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeJson(props: IconComponentProps) {
  return <Icon path={mdiCodeJson} {...props} />;
}

export { mdiCodeJson as path };
