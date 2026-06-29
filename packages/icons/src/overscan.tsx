import { mdiOverscan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Overscan(props: IconComponentProps) {
  return <Icon path={mdiOverscan} {...props} />;
}

export { mdiOverscan as path };
