import { mdiContentCut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentCut(props: IconComponentProps) {
  return <Icon path={mdiContentCut} {...props} />;
}

export { mdiContentCut as path };
