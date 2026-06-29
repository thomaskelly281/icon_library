import { mdiDropbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dropbox(props: IconComponentProps) {
  return <Icon path={mdiDropbox} {...props} />;
}

export { mdiDropbox as path };
