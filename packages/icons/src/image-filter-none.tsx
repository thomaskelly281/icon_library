import { mdiImageFilterNone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageFilterNone(props: IconComponentProps) {
  return <Icon path={mdiImageFilterNone} {...props} />;
}

export { mdiImageFilterNone as path };
