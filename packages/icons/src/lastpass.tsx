import { mdiLastpass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lastpass(props: IconComponentProps) {
  return <Icon path={mdiLastpass} {...props} />;
}

export { mdiLastpass as path };
