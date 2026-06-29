import { mdiFileCabinet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCabinet(props: IconComponentProps) {
  return <Icon path={mdiFileCabinet} {...props} />;
}

export { mdiFileCabinet as path };
