import { mdiRelativeScale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelativeScale(props: IconComponentProps) {
  return <Icon path={mdiRelativeScale} {...props} />;
}

export { mdiRelativeScale as path };
