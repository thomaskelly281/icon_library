import { mdiFileDocumentArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentArrowRight(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentArrowRight} {...props} />;
}

export { mdiFileDocumentArrowRight as path };
