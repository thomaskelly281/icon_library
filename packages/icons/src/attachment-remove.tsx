import { mdiAttachmentRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AttachmentRemove(props: IconComponentProps) {
  return <Icon path={mdiAttachmentRemove} {...props} />;
}

export { mdiAttachmentRemove as path };
