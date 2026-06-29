import { mdiClosedCaption } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClosedCaption(props: IconComponentProps) {
  return <Icon path={mdiClosedCaption} {...props} />;
}

export { mdiClosedCaption as path };
