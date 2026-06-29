import { mdiInstagram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Instagram(props: IconComponentProps) {
  return <Icon path={mdiInstagram} {...props} />;
}

export { mdiInstagram as path };
