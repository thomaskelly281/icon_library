import { mdiAttachment } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Attachment(props: IconComponentProps) {
  return <Icon path={mdiAttachment} {...props} />;
}

export { mdiAttachment as path };
