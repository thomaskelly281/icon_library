import { mdiViewStream } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewStream(props: IconComponentProps) {
  return <Icon path={mdiViewStream} {...props} />;
}

export { mdiViewStream as path };
