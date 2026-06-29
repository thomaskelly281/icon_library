import { mdiAlpha } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Alpha(props: IconComponentProps) {
  return <Icon path={mdiAlpha} {...props} />;
}

export { mdiAlpha as path };
