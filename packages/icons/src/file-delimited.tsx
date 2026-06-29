import { mdiFileDelimited } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDelimited(props: IconComponentProps) {
  return <Icon path={mdiFileDelimited} {...props} />;
}

export { mdiFileDelimited as path };
