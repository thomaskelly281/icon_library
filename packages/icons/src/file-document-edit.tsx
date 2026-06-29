import { mdiFileDocumentEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentEdit(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentEdit} {...props} />;
}

export { mdiFileDocumentEdit as path };
