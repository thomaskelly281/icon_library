import { mdiImageSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageSync(props: IconComponentProps) {
  return <Icon path={mdiImageSync} {...props} />;
}

export { mdiImageSync as path };
