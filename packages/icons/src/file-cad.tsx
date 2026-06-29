import { mdiFileCad } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCad(props: IconComponentProps) {
  return <Icon path={mdiFileCad} {...props} />;
}

export { mdiFileCad as path };
