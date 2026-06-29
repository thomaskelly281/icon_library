import { mdiFileDocumentCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentCheck(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentCheck} {...props} />;
}

export { mdiFileDocumentCheck as path };
