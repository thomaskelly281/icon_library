import { mdiAttachmentMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AttachmentMinus(props: IconComponentProps) {
  return <Icon path={mdiAttachmentMinus} {...props} />;
}

export { mdiAttachmentMinus as path };
