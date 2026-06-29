import { mdiFileDocumentPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentPlus(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentPlus} {...props} />;
}

export { mdiFileDocumentPlus as path };
