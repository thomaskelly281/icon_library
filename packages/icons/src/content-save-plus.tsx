import { mdiContentSavePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSavePlus(props: IconComponentProps) {
  return <Icon path={mdiContentSavePlus} {...props} />;
}

export { mdiContentSavePlus as path };
