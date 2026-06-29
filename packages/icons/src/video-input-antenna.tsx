import { mdiVideoInputAntenna } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoInputAntenna(props: IconComponentProps) {
  return <Icon path={mdiVideoInputAntenna} {...props} />;
}

export { mdiVideoInputAntenna as path };
