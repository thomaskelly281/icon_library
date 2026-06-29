import { mdiQrcodeRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QrcodeRemove(props: IconComponentProps) {
  return <Icon path={mdiQrcodeRemove} {...props} />;
}

export { mdiQrcodeRemove as path };
