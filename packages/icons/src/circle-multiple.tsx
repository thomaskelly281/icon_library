import { mdiCircleMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleMultiple(props: IconComponentProps) {
  return <Icon path={mdiCircleMultiple} {...props} />;
}

export { mdiCircleMultiple as path };
