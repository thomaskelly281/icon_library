import { mdiPopcorn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Popcorn(props: IconComponentProps) {
  return <Icon path={mdiPopcorn} {...props} />;
}

export { mdiPopcorn as path };
