import { mdiUploadNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadNetwork(props: IconComponentProps) {
  return <Icon path={mdiUploadNetwork} {...props} />;
}

export { mdiUploadNetwork as path };
