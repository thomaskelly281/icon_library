import { mdiFilePngBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePngBox(props: IconComponentProps) {
  return <Icon path={mdiFilePngBox} {...props} />;
}

export { mdiFilePngBox as path };
