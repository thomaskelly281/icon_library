import { mdiFilePowerpoint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePowerpoint(props: IconComponentProps) {
  return <Icon path={mdiFilePowerpoint} {...props} />;
}

export { mdiFilePowerpoint as path };
