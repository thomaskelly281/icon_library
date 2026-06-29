import { mdiMessageVideo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageVideo(props: IconComponentProps) {
  return <Icon path={mdiMessageVideo} {...props} />;
}

export { mdiMessageVideo as path };
