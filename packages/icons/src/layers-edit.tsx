import { mdiLayersEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersEdit(props: IconComponentProps) {
  return <Icon path={mdiLayersEdit} {...props} />;
}

export { mdiLayersEdit as path };
