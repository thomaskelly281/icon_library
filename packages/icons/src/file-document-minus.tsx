import { mdiFileDocumentMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentMinus(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentMinus} {...props} />;
}

export { mdiFileDocumentMinus as path };
