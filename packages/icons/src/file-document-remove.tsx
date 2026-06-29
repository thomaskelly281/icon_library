import { mdiFileDocumentRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentRemove(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentRemove} {...props} />;
}

export { mdiFileDocumentRemove as path };
