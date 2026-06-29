import { mdiContentPaste } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentPaste(props: IconComponentProps) {
  return <Icon path={mdiContentPaste} {...props} />;
}

export { mdiContentPaste as path };
