import { mdiFileVideo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileVideo(props: IconComponentProps) {
  return <Icon path={mdiFileVideo} {...props} />;
}

export { mdiFileVideo as path };
