import { mdiAccountConvert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountConvert(props: IconComponentProps) {
  return <Icon path={mdiAccountConvert} {...props} />;
}

export { mdiAccountConvert as path };
