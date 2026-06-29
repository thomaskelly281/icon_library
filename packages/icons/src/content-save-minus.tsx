import { mdiContentSaveMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveMinus(props: IconComponentProps) {
  return <Icon path={mdiContentSaveMinus} {...props} />;
}

export { mdiContentSaveMinus as path };
