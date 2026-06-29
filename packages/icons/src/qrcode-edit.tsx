import { mdiQrcodeEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QrcodeEdit(props: IconComponentProps) {
  return <Icon path={mdiQrcodeEdit} {...props} />;
}

export { mdiQrcodeEdit as path };
