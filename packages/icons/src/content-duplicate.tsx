import { mdiContentDuplicate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentDuplicate(props: IconComponentProps) {
  return <Icon path={mdiContentDuplicate} {...props} />;
}

export { mdiContentDuplicate as path };
