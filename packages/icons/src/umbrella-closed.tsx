import { mdiUmbrellaClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UmbrellaClosed(props: IconComponentProps) {
  return <Icon path={mdiUmbrellaClosed} {...props} />;
}

export { mdiUmbrellaClosed as path };
