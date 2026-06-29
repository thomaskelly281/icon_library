import { mdiCctv } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cctv(props: IconComponentProps) {
  return <Icon path={mdiCctv} {...props} />;
}

export { mdiCctv as path };
