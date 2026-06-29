import { mdiFileDocument } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocument(props: IconComponentProps) {
  return <Icon path={mdiFileDocument} {...props} />;
}

export { mdiFileDocument as path };
