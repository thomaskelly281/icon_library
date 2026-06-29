import { mdiFileCadBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCadBox(props: IconComponentProps) {
  return <Icon path={mdiFileCadBox} {...props} />;
}

export { mdiFileCadBox as path };
