import { mdiTagMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagMultiple(props: IconComponentProps) {
  return <Icon path={mdiTagMultiple} {...props} />;
}

export { mdiTagMultiple as path };
