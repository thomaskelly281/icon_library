import { mdiAttachmentLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AttachmentLock(props: IconComponentProps) {
  return <Icon path={mdiAttachmentLock} {...props} />;
}

export { mdiAttachmentLock as path };
