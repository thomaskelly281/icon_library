import { mdiVideo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Video(props: IconComponentProps) {
  return <Icon path={mdiVideo} {...props} />;
}

export { mdiVideo as path };
