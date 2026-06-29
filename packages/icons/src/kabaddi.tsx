import { mdiKabaddi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kabaddi(props: IconComponentProps) {
  return <Icon path={mdiKabaddi} {...props} />;
}

export { mdiKabaddi as path };
