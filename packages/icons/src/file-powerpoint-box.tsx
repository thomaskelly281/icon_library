import { mdiFilePowerpointBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePowerpointBox(props: IconComponentProps) {
  return <Icon path={mdiFilePowerpointBox} {...props} />;
}

export { mdiFilePowerpointBox as path };
