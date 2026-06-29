import { mdiPoundBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PoundBox(props: IconComponentProps) {
  return <Icon path={mdiPoundBox} {...props} />;
}

export { mdiPoundBox as path };
