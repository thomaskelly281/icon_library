import { mdiMower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mower(props: IconComponentProps) {
  return <Icon path={mdiMower} {...props} />;
}

export { mdiMower as path };
