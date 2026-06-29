import { mdiDrupal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Drupal(props: IconComponentProps) {
  return <Icon path={mdiDrupal} {...props} />;
}

export { mdiDrupal as path };
