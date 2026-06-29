import { mdiGaugeFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GaugeFull(props: IconComponentProps) {
  return <Icon path={mdiGaugeFull} {...props} />;
}

export { mdiGaugeFull as path };
