import { mdiAlphabetical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Alphabetical(props: IconComponentProps) {
  return <Icon path={mdiAlphabetical} {...props} />;
}

export { mdiAlphabetical as path };
