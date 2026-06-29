import { mdiCloseCircleMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseCircleMultiple(props: IconComponentProps) {
  return <Icon path={mdiCloseCircleMultiple} {...props} />;
}

export { mdiCloseCircleMultiple as path };
