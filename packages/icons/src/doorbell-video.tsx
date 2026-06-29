import { mdiDoorbellVideo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DoorbellVideo(props: IconComponentProps) {
  return <Icon path={mdiDoorbellVideo} {...props} />;
}

export { mdiDoorbellVideo as path };
