import { mdiCloseBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiCloseBoxMultiple} {...props} />;
}

export { mdiCloseBoxMultiple as path };
