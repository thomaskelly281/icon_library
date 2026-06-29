import { mdiFilePresentationBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePresentationBox(props: IconComponentProps) {
  return <Icon path={mdiFilePresentationBox} {...props} />;
}

export { mdiFilePresentationBox as path };
