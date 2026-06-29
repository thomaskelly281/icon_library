import { mdiDresser } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dresser(props: IconComponentProps) {
  return <Icon path={mdiDresser} {...props} />;
}

export { mdiDresser as path };
