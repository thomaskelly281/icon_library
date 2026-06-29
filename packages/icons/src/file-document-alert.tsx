import { mdiFileDocumentAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentAlert(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentAlert} {...props} />;
}

export { mdiFileDocumentAlert as path };
