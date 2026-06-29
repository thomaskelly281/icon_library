import { mdiFileDocumentMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentMultiple(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentMultiple} {...props} />;
}

export { mdiFileDocumentMultiple as path };
