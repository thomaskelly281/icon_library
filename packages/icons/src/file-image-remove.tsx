import { mdiFileImageRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImageRemove(props: IconComponentProps) {
  return <Icon path={mdiFileImageRemove} {...props} />;
}

export { mdiFileImageRemove as path };
