import { mdiVideoInputHdmi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoInputHdmi(props: IconComponentProps) {
  return <Icon path={mdiVideoInputHdmi} {...props} />;
}

export { mdiVideoInputHdmi as path };
