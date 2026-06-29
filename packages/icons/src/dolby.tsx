import { mdiDolby } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dolby(props: IconComponentProps) {
  return <Icon path={mdiDolby} {...props} />;
}

export { mdiDolby as path };
