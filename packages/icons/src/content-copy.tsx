import { mdiContentCopy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentCopy(props: IconComponentProps) {
  return <Icon path={mdiContentCopy} {...props} />;
}

export { mdiContentCopy as path };
