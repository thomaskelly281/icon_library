import { mdiAttachmentPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AttachmentPlus(props: IconComponentProps) {
  return <Icon path={mdiAttachmentPlus} {...props} />;
}

export { mdiAttachmentPlus as path };
