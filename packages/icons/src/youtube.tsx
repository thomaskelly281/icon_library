import { mdiYoutube } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Youtube(props: IconComponentProps) {
  return <Icon path={mdiYoutube} {...props} />;
}

export { mdiYoutube as path };
