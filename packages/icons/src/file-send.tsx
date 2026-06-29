import { mdiFileSend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSend(props: IconComponentProps) {
  return <Icon path={mdiFileSend} {...props} />;
}

export { mdiFileSend as path };
