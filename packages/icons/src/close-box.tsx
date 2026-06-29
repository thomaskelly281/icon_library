import { mdiCloseBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseBox(props: IconComponentProps) {
  return <Icon path={mdiCloseBox} {...props} />;
}

export { mdiCloseBox as path };
