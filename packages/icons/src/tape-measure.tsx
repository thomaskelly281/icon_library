import { mdiTapeMeasure } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TapeMeasure(props: IconComponentProps) {
  return <Icon path={mdiTapeMeasure} {...props} />;
}

export { mdiTapeMeasure as path };
