import { mdiFilePdfBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePdfBox(props: IconComponentProps) {
  return <Icon path={mdiFilePdfBox} {...props} />;
}

export { mdiFilePdfBox as path };
