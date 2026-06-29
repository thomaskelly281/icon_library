import { mdiFileDocumentRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentRefresh(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentRefresh} {...props} />;
}

export { mdiFileDocumentRefresh as path };
