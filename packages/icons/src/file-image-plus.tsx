import { mdiFileImagePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImagePlus(props: IconComponentProps) {
  return <Icon path={mdiFileImagePlus} {...props} />;
}

export { mdiFileImagePlus as path };
