import { mdiAttachmentOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AttachmentOff(props: IconComponentProps) {
  return <Icon path={mdiAttachmentOff} {...props} />;
}

export { mdiAttachmentOff as path };
