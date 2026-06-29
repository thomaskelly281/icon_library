import { mdiFileReplace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileReplace(props: IconComponentProps) {
  return <Icon path={mdiFileReplace} {...props} />;
}

export { mdiFileReplace as path };
