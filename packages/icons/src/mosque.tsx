import { mdiMosque } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mosque(props: IconComponentProps) {
  return <Icon path={mdiMosque} {...props} />;
}

export { mdiMosque as path };
