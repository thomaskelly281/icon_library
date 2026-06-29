import { mdiFileCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCog(props: IconComponentProps) {
  return <Icon path={mdiFileCog} {...props} />;
}

export { mdiFileCog as path };
