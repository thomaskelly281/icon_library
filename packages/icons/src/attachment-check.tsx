import { mdiAttachmentCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AttachmentCheck(props: IconComponentProps) {
  return <Icon path={mdiAttachmentCheck} {...props} />;
}

export { mdiAttachmentCheck as path };
